const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const pngToIco = require('png-to-ico');

async function generateIcons() {
  const sourcePath = path.join(process.cwd(), 'public', 'MASCOTDAZESTUDIO.png');
  const publicDir = path.join(process.cwd(), 'public');

  // Generate multiple sizes for favicon
  const sizes = [16, 32];
  const pngPaths = await Promise.all(
    sizes.map(async size => {
      const tempPath = path.join(publicDir, `temp-${size}.png`);
      await sharp(sourcePath)
        .resize(size, size)
        .png()
        .toFile(tempPath);
      return tempPath;
    })
  );

  // Convert PNGs to ICO with multiple sizes
  const buffer = await pngToIco(pngPaths);
  await fs.writeFile(path.join(publicDir, 'favicon.ico'), buffer);
  
  // Clean up temporary files
  await Promise.all(pngPaths.map(tempPath => fs.unlink(tempPath)));

  // Create Apple Touch Icon
  await sharp(sourcePath)
    .resize(180, 180)
    .toFile(path.join(publicDir, 'apple-icon.png'));

  // Create manifest file
  const manifest = {
    name: 'Daze Studio',
    short_name: 'Daze',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32',
        type: 'image/x-icon'
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    theme_color: '#9500ff',
    background_color: '#0a0a0a',
    display: 'standalone'
  };

  await fs.writeFile(
    path.join(publicDir, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );

  console.log('Icons generated successfully!');
}

generateIcons().catch(console.error); 