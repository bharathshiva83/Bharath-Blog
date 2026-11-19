import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://bharathshiva83.github.io',
  base: '/Bharath-Blog',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
  vite: {
    plugins: [
      {
        name: 'pdf-attachment-header',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url && req.url.includes('resume.pdf') && (req.url.includes('download=1') || req.url.includes('download=true'))) {
              res.setHeader('Content-Disposition', 'attachment; filename="Palancha_Bharath_Shiva_Resume.pdf"');
            }
            next();
          });
        },
      },
    ],
  },
});
