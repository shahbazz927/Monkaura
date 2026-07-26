import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

const routesToPrerender = fs.readdirSync(toAbsolute('src/components'))
  .map((file) => file.replace(/\.tsx$/, '').toLowerCase());

const routes = [
  '/',
  '/home',
  '/products',
  '/zero-sugar-recipes',
  '/allulose-story',
  '/about',
  '/contact',
  '/privacy'
];

(async () => {
  for (const url of routes) {
    const { html, helmet } = render(url);
    
    let helmetString = '';
    if (helmet) {
      helmetString = `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      `;
    }

    const htmlContent = template
      .replace(`<!--app-head-->`, helmetString)
      .replace(`<!--app-html-->`, html);

    const dir = url === '/' ? 'dist' : `dist${url}`;
    if (!fs.existsSync(toAbsolute(dir))) { fs.mkdirSync(toAbsolute(dir), { recursive: true }); }
    const filePath = `${dir}/index.html`;
    fs.writeFileSync(toAbsolute(filePath), htmlContent);
    console.log(`pre-rendered ${filePath}`);
  }

  // Generate sitemap.xml
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://monkaura.in${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemap);
  console.log('generated sitemap.xml');

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

# Specifically allow standard bots & AI Crawlers
User-agent: Googlebot
Allow: /
User-agent: Bingbot
Allow: /
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: CCBot
Allow: /

Sitemap: https://monkaura.in/sitemap.xml`;
  fs.writeFileSync(toAbsolute('dist/robots.txt'), robotsTxt);
  console.log('generated robots.txt');
})();
