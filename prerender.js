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
  '/products/monkaura-100g',
  '/products/100g',
  '/products/monkaura-200g',
  '/products/200g',
  '/monk-fruit-sweetener-india',
  '/monk-fruit-benefits',
  '/monk-fruit-sweetener-guide',
  '/what-is-monk-fruit',
  '/how-monk-fruit-sweetener-works',
  '/how-to-use-monk-fruit-sweetener',
  '/monk-fruit-sweetener-for-baking',
  '/monk-fruit-sweetener-for-tea-and-coffee',
  '/monk-fruit-sweetener-faq',
  '/monk-fruit-vs-stevia',
  '/monk-fruit-vs-erythritol',
  '/monk-fruit-vs-sugar',
  '/monk-fruit-vs-allulose',
  '/quality-testing',
  '/ingredients',
  '/nutrition',
  '/fssai',
  '/recipes',
  '/recipes/masala-chai',
  '/recipes/filter-coffee',
  '/recipes/nimbu-pani',
  '/recipes/cold-coffee',
  '/recipes/kheer',
  '/recipes/gulab-jamun',
  '/recipes/almond-flour-halwa',
  '/recipes/besan-halwa',
  '/recipes/keto-almond-cookies',
  '/recipes/sponge-cake',
  '/zero-sugar-recipes',
  '/allulose-story',
  '/about',
  '/contact',
  '/reviews',
  '/privacy'
];

(async () => {
  for (const url of routes) {
    try {
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

      // Strip default static title, description, and og tags from template so helmet is the sole source of truth
      let htmlContent = template
        .replace(/<title>[^<]*<\/title>/gi, '')
        .replace(/<meta\s+name=["']description["'][^>]*>/gi, '')
        .replace(/<meta\s+property=["']og:title["'][^>]*>/gi, '')
        .replace(/<meta\s+property=["']og:description["'][^>]*>/gi, '')
        .replace(`<!--app-head-->`, helmetString)
        .replace(`<!--app-html-->`, html);

      const dir = url === '/' ? 'dist' : `dist${url}`;
      if (!fs.existsSync(toAbsolute(dir))) { fs.mkdirSync(toAbsolute(dir), { recursive: true }); }
      const filePath = `${dir}/index.html`;
      fs.writeFileSync(toAbsolute(filePath), htmlContent);
      console.log(`pre-rendered ${filePath}`);
    } catch (e) {
      console.error(`Error prerendering ${url}:`, e);
    }
  }
})();
