const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/hero');
const destination = target;

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(1000)
      .toFile(path.resolve(
        __dirname, 
        `${destination}/${image.split('.').slice(0, -1).join('')}-default.jpg`
      ));

    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname, 
        `${destination}/${image.split('.').slice(0, -1).join('')}-small.jpg`
      ));
  });
