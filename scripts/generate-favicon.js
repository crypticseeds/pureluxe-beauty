const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const logoPath = path.join(__dirname, '../public/Logo.jpeg');
  const publicDir = path.join(__dirname, '../public');

  if (!fs.existsSync(logoPath)) {
    console.error('Logo.jpeg not found in public directory');
    return;
  }

  try {
    // Generate different favicon sizes
    const sizes = [
      { size: 16, name: 'favicon-16x16.png' },
      { size: 32, name: 'favicon-32x32.png' },
      { size: 48, name: 'favicon-48x48.png' },
      { size: 180, name: 'apple-touch-icon.png' },
      { size: 192, name: 'android-chrome-192x192.png' },
      { size: 512, name: 'android-chrome-512x512.png' },
    ];

    for (const { size, name } of sizes) {
      await sharp(logoPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(path.join(publicDir, name));
      
      console.log(`Generated ${name}`);
    }

    // Generate ICO favicon (16x16 and 32x32 combined)
    await sharp(logoPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));

    console.log('Generated favicon.ico');

    // Generate Open Graph image (1200x630)
    await sharp(logoPath)
      .resize(1200, 630, {
        fit: 'contain',
        background: { r: 236, g: 72, b: 153, alpha: 1 } // Pink background
      })
      .jpeg({ quality: 90 })
      .toFile(path.join(publicDir, 'og-image.jpg'));

    console.log('Generated og-image.jpg');

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();