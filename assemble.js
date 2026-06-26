// Assembles the two CRA builds into a single ./build directory:
//   build/2023/*  <- 2023/build  (homepage "/2023")
//   build/2026/*  <- 2026/build  (homepage "/2026")
// Vercel serves ./build as the static output; vercel.json handles
// the root redirect and per-subpath SPA fallbacks.
const fs = require('fs');
const path = require('path');

const root = __dirname;
const out = path.join(root, 'build');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const year of ['2023', '2026']) {
  const src = path.join(root, year, 'build');
  if (!fs.existsSync(src)) {
    throw new Error(`Missing build output for ${year}: ${src}`);
  }
  fs.cpSync(src, path.join(out, year), { recursive: true });
  console.log(`Copied ${year}/build -> build/${year}`);
}
