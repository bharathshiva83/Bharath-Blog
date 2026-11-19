# Bharath's Blog - Project Tracker

## 1. Overview
- **Author**: Bharath Shiva
- **Repo**: [bharathshiva83/Bharath-Blog](https://github.com/bharathshiva83/Bharath-Blog)
- **Hosting**: GitHub Pages (100% Free & Native Jekyll support)
- **Live URL**: `https://bharathshiva83.github.io/Bharath-Blog/`

---

## 2. Tech Architecture
- **Engine**: Jekyll (Standard GitHub Pages compatible, zero Ruby required locally)
- **Palette (Warm Solar Ember - Non-AI Crafted)**:
  - **Dark Mode**: Warm Obsidian (`#0b0c0f`), Velvety Carbon (`#13151b`), Crisp Off-White (`#f5f5f7`)
  - **Accents**: Vivid Persimmon (`#ff5733`), Sunburst Gold (`#ffaa00`), Wild Crimson (`#ff2a55`)
  - **Light Mode**: Warm Alabaster Linen (`#faf8f5`), Earth Terracotta (`#d9381e`), Sunlit Amber (`#d97706`)
- **Interactive & Animations**:
  - **Dynamic Mouse Spotlight**: Cards dynamically illuminate and follow cursor coordinates in real-time (`--mouse-x`, `--mouse-y`)
  - **Mesh Ambient Glow**: Fluid `@keyframes auraFloat` background animation
  - **Fluid Gradient Text**: Continuous `@keyframes gradientShift` on brand headings
  - **Interactive Button Sheen**: Shimmer wave effect on primary CTA hover
  - **Spring Micro-Interactions**: Physics-based ease curves on hover and click
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *JetBrains Mono*)
- **Content**: Markdown-driven articles (`_posts/`)

---

## 3. Project Structure
```text
├── _config.yml               # Jekyll & GitHub Pages site configuration
├── _data/
│   └── projects.yml          # Portfolio project definitions & links
├── _includes/
│   ├── header.html           # Brand, navigation & theme toggle
│   └── footer.html           # Footer social links & copyright
├── _layouts/
│   ├── default.html          # Base HTML layout
│   ├── page.html             # Layout for About & Portfolio pages
│   └── post.html             # Layout for blog articles
├── _posts/                   # Markdown blog posts
│   ├── 2026-11-12-modern-web-development-in-2026.md
│   └── 2026-11-19-welcome-to-my-blog.md
├── assets/
│   ├── css/style.css         # Complete responsive design system
│   └── js/main.js            # Theme toggle & mobile menu controller
├── index.html                # Home page (Hero, Featured Projects, Articles)
├── about.html                # About Me page (Bio, Skills grid, Contact)
├── projects.html             # Full portfolio gallery
├── 404.html                  # Custom 404 error page
└── PROJECT_TRACKER.md        # This tracker file
```

---

## 4. Features Implemented
- [x] Modern Hero section with status pill and CTA buttons
- [x] About Me page with bio, technical toolkit, and principles
- [x] Portfolio showcase with project cards, tags, and code/demo links
- [x] Markdown blog post engine with reading time & tags
- [x] Dark / Light theme toggle with `localStorage` memory
- [x] Mobile drawer navigation
- [x] 100% free GitHub Pages ready

## 4. How to Update Your Personal Details
- **Profile Info & Social Links**: Edit [_config.yml](file:///c:/Users/BHARATH%20SHIVA/Documents/GitHub/Bharath%20Blog/_config.yml) (name, email, github, linkedin, twitter).
- **Portfolio Projects**: Edit or add projects in [_data/projects.yml](file:///c:/Users/BHARATH%20SHIVA/Documents/GitHub/Bharath%20Blog/_data/projects.yml).
- **Bio & Skills**: Edit [about.html](file:///c:/Users/BHARATH%20SHIVA/Documents/GitHub/Bharath%20Blog/about.html).
- **New Articles**: Add any new markdown file to [_posts/](file:///c:/Users/BHARATH%20SHIVA/Documents/GitHub/Bharath%20Blog/_posts/).

---

## 5. Free Hosting Tools
1. **GitHub Pages (Best & Easiest)**:
   - 100% Free, zero external accounts needed.
   - Edit files directly on **GitHub.com** or push from your PC, and it automatically publishes live via [.github/workflows/deploy.yml](file:///c:/Users/BHARATH%20SHIVA/Documents/GitHub/Bharath%20Blog/.github/workflows/deploy.yml).
2. **Vercel / Netlify**:
   - Optional alternatives with 1-click GitHub repo import.

---

## 6. How to Deploy (GitHub Pages)
1. Commit and push all files to branch `main`:
   ```bash
   git add .
   git commit -m "feat: launch modern blog and portfolio"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** -> **Pages**
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**
   - Select branch: `main`, folder: `/ (root)` -> Click **Save**
3. Your blog will be live at:
   `https://bharathshiva83.github.io/Bharath-Blog/`
