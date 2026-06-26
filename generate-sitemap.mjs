#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pages = [
  { loc: 'https://nationalfreedomstudio.com/', changefreq: 'weekly', priority: '1.0' },
  { loc: 'https://nationalfreedomstudio.com/studio', changefreq: 'monthly', priority: '0.9' },
  { loc: 'https://nationalfreedomstudio.com/gear', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://nationalfreedomstudio.com/discography', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://nationalfreedomstudio.com/mastering', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://nationalfreedomstudio.com/about', changefreq: 'monthly', priority: '0.7' },
  { loc: 'https://nationalfreedomstudio.com/contact', changefreq: 'weekly', priority: '0.9' },
];

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Generate sitemap XML
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

// Write to docs/sitemap.xml
const sitemapPath = path.join(__dirname, 'docs', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapContent);

console.log(`✓ Generated sitemap.xml with date: ${today}`);
