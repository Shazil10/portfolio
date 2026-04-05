/* eslint-disable no-console */
/* Optional text fallback card. Production social image: static/og-hero.png (site screenshot). */
const path = require('path');
const sharp = require('sharp');

const OUT = path.join(__dirname, '..', 'static', 'og-fallback.png');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a192f"/>
  <rect x="80" y="80" width="1040" height="470" fill="none" stroke="#64ffda" stroke-width="2" opacity="0.35" rx="4"/>
  <text x="600" y="270" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="56" fill="#ccd6f6" font-weight="600">Shazil Farukh</text>
  <text x="600" y="340" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="26" fill="#8892b0">Quantitative finance · World Bank Treasury · Minerva</text>
  <text x="600" y="400" text-anchor="middle" font-family="'SF Mono', 'Consolas', monospace" font-size="22" fill="#64ffda">shazilfarukh.com</text>
</svg>`;

sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(OUT)
  .then(() => console.log('Wrote', OUT))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
