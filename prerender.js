import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

// Prerender every real public route (including the /home alias so the SPA
// route resolves correctly) into static HTML files for maximum SEO.
// NOTE: sitemap.xml and robots.txt are NOT generated here — they live in
// public/ and are copied into dist/ by Vite automatically. This keeps a
// single source of truth for those files.
const routes = [
  '/',
  '/home',
  '/products',
  '/zero-sugar-recipes',
  '/allulose-story',
  '/about',
  '/contact',
<<<<<<< HEAD
  '/privacy',
  '/reviews'
=======
  '/privacy'
>>>>>>> b5259fe256e7ff30f725139b6150aae851290a81
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
})();
