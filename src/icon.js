const path = require("path");
const gm = require("gm");
const makeDir = require("make-dir");
const ios = require("./ios");
const android = require("./android");

/**
 * Generates an icon
 *
 * @param {string} img
 * @param {object} icon
 */
async function generateIcon(img, icon) {
  return makeDir(icon.dir).then(
    () =>
      new Promise((resolve, reject) => {
        const target = path.format({
          dir: icon.dir,
          name: icon.name
        });

        gm(img)
          .resize(icon.width)
          .write(target, err => {
            if (err) {
              return reject(err);
            }
            resolve({
              ...icon,
              src: target
            });
          });
      })
  );
}

/**
 * Generates all icons for all platforms for a given image.
 *
 * @param {string} img
 */
async function generateIcons(img) {
  return Promise.all(
    [ios, android].map(platform =>
      Promise.all(platform.icons.map(icon => generateIcon(img, icon))).then(
        icons => {
          const images = icons.map(platform.iconTemplate);

          return platform.platformTemplate(images);
        }
      )
    )
  );
}

/**
 * Kicks off icon generation
 *
 * @param {string} img
 */
async function icon(img) {
  return generateIcons(img).then(platforms => {
    platforms.forEach(p => console.log(p));
  });
}

module.exports = icon;
