#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to pre-render
const routes = [
  '/',
  '/studio',
  '/gear',
  '/discography',
  '/mastering',
  '/about',
  '/contact'
];

// Read the base index.html
const indexPath = path.join(__dirname, 'docs', 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf-8');

// For each route, create a directory with index.html
routes.forEach(route => {
  let dirPath;
  
  if (route === '/') {
    // Root is already at docs/index.html, skip
    return;
  }
  
  // Create directory structure: docs/studio/index.html, docs/gear/index.html, etc.
  dirPath = path.join(__dirname, 'docs', route.slice(1));
  
  // Ensure directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Write index.html to the route directory
  const indexFilePath = path.join(dirPath, 'index.html');
  fs.writeFileSync(indexFilePath, indexContent);
  
  console.log(`✓ Pre-rendered ${route} → ${indexFilePath}`);
});

console.log('✓ Pre-rendering complete!');
