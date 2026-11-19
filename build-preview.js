const fs = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');
const fm = require('front-matter');
const { Liquid } = require('liquidjs');

async function build() {
  const { marked } = await import('marked');
  const rootDir = __dirname;
  const outDir = path.join(rootDir, '_site');
  await fs.ensureDir(outDir);

  // 1. Load config
  const configContent = await fs.readFile(path.join(rootDir, '_config.yml'), 'utf-8');
  const site = yaml.load(configContent) || {};
  site.data = {};

  // For local preview, set baseurl to empty so paths work at root
  const previewBaseUrl = '';

  // 2. Load data
  const dataDir = path.join(rootDir, '_data');
  if (await fs.pathExists(dataDir)) {
    const files = await fs.readdir(dataDir);
    for (const file of files) {
      if (file.endsWith('.yml') || file.endsWith('.yaml')) {
        const key = path.basename(file, path.extname(file));
        const val = yaml.load(await fs.readFile(path.join(dataDir, file), 'utf-8'));
        site.data[key] = val;
      }
    }
  }

  // 3. Initialize Liquid
  const engine = new Liquid({
    root: [path.join(rootDir, '_includes'), path.join(rootDir, '_layouts')],
    extname: '.html',
    jekyllInclude: true,
    dynamicPartials: false
  });

  // Custom filters matching Jekyll
  engine.registerFilter('relative_url', (input) => {
    if (!input) return '';
    const clean = input.startsWith('/') ? input : '/' + input;
    return previewBaseUrl + clean;
  });

  engine.registerFilter('absolute_url', (input) => {
    if (!input) return '';
    return 'http://localhost:3000' + (input.startsWith('/') ? input : '/' + input);
  });

  engine.registerFilter('date_to_xmlschema', (date) => {
    return new Date(date).toISOString();
  });

  engine.registerFilter('number_of_words', (content) => {
    if (!content) return 0;
    return content.trim().split(/\s+/).length;
  });

  engine.registerFilter('divided_by', (v, div) => {
    return Math.floor(Number(v) / Number(div));
  });

  engine.registerFilter('strip_html', (content) => {
    if (!content) return '';
    return content.replace(/<[^>]*>?/gm, '');
  });

  engine.registerFilter('truncatewords', (content, count) => {
    if (!content) return '';
    const words = content.trim().split(/\s+/);
    if (words.length <= count) return content;
    return words.slice(0, count).join(' ') + '...';
  });

  engine.registerFilter('date', (date, format) => {
    const d = (date === 'now' || !date) ? new Date() : new Date(date);
    if (isNaN(d.getTime())) return String(date);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (format === "%Y") return d.getFullYear();
    if (format === "%B %d, %Y") {
      return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}`;
    }
    return d.toDateString();
  });

  // 4. Load Posts
  const postsDir = path.join(rootDir, '_posts');
  const posts = [];
  if (await fs.pathExists(postsDir)) {
    const postFiles = await fs.readdir(postsDir);
    for (const file of postFiles) {
      if (!file.endsWith('.md')) continue;
      const raw = await fs.readFile(path.join(postsDir, file), 'utf-8');
      const parsed = fm(raw);
      const htmlContent = marked(parsed.body);

      // Extract date & slug from filename: YYYY-MM-DD-title.md
      const match = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
      let date = parsed.attributes.date || new Date();
      let slug = match ? match[4] : path.basename(file, '.md');
      let year = match ? match[1] : '2026';
      let month = match ? match[2] : '01';
      let day = match ? match[3] : '01';

      const postUrl = `/posts/${year}/${month}/${day}/${slug}/`;

      posts.push({
        ...parsed.attributes,
        date: date,
        content: htmlContent,
        rawBody: parsed.body,
        slug: slug,
        url: postUrl,
        year, month, day
      });
    }
  }

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  site.posts = posts;

  // 5. Render Posts
  const postLayoutContent = await fs.readFile(path.join(rootDir, '_layouts', 'post.html'), 'utf-8');
  const defaultLayoutContent = await fs.readFile(path.join(rootDir, '_layouts', 'default.html'), 'utf-8');

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    post.previous = posts[i + 1] || null;
    post.next = posts[i - 1] || null;

    const postParsedFm = fm(postLayoutContent);
    const postRendered = await engine.parseAndRender(postParsedFm.body, {
      site,
      page: post,
      content: post.content
    });

    const fullHtml = await engine.parseAndRender(defaultLayoutContent, {
      site,
      page: post,
      content: postRendered
    });

    const outPath = path.join(outDir, 'posts', post.year, post.month, post.day, post.slug, 'index.html');
    await fs.ensureDir(path.dirname(outPath));
    await fs.writeFile(outPath, fullHtml, 'utf-8');
  }

  // 6. Render Pages (index.html, about.html, projects.html, 404.html)
  const pageFiles = ['index.html', 'about.html', 'projects.html', '404.html'];
  const pageLayoutContent = await fs.readFile(path.join(rootDir, '_layouts', 'page.html'), 'utf-8');
  const pageLayoutFm = fm(pageLayoutContent);

  for (const pageFile of pageFiles) {
    const filePath = path.join(rootDir, pageFile);
    if (!await fs.pathExists(filePath)) continue;

    const raw = await fs.readFile(filePath, 'utf-8');
    const parsed = fm(raw);
    const pageData = {
      ...parsed.attributes,
      url: pageFile === 'index.html' ? '/' : `/${pageFile}`
    };

    let bodyRendered = await engine.parseAndRender(parsed.body, {
      site,
      page: pageData
    });

    let layoutToUse = parsed.attributes.layout || 'default';
    let wrappedContent = bodyRendered;

    if (layoutToUse === 'page') {
      wrappedContent = await engine.parseAndRender(pageLayoutFm.body, {
        site,
        page: pageData,
        content: bodyRendered
      });
    }

    const finalHtml = await engine.parseAndRender(defaultLayoutContent, {
      site,
      page: pageData,
      content: wrappedContent
    });

    await fs.writeFile(path.join(outDir, pageFile), finalHtml, 'utf-8');

    // Clean URL support (e.g. /about -> _site/about/index.html)
    if (pageFile !== 'index.html' && pageFile !== '404.html') {
      const pageDir = path.join(outDir, path.basename(pageFile, '.html'));
      await fs.ensureDir(pageDir);
      await fs.writeFile(path.join(pageDir, 'index.html'), finalHtml, 'utf-8');
    }
  }

  // 7. Copy static assets
  const assetsDir = path.join(rootDir, 'assets');
  if (await fs.pathExists(assetsDir)) {
    await fs.copy(assetsDir, path.join(outDir, 'assets'));
  }

  console.log('✅ Site build complete: output in _site/');
}

build().catch(err => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
