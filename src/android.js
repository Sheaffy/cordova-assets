const splash = [
  {
    dir: "/app/android/drawable-land-ldpi",
    name: "screen",
    width: 320,
    height: 200,
    density: "land-ldpi"
  },
  {
    dir: "/app/android/drawable-land-mdpi",
    name: "screen",
    width: 480,
    height: 320,
    density: "land-mdpi"
  },
  {
    dir: "/app/android/drawable-land-hdpi",
    name: "screen",
    width: 800,
    height: 480,
    density: "land-hdpi"
  },
  {
    dir: "/app/android/drawable-land-xhdpi",
    name: "screen",
    width: 1280,
    height: 720,
    density: "land-xhdpi"
  },
  {
    dir: "/app/android/drawable-land-xxhdpi",
    name: "screen",
    width: 1600,
    height: 960,
    density: "land-xxhdpi"
  },
  {
    dir: "/app/android/drawable-land-xxxhdpi",
    name: "screen",
    width: 1920,
    height: 1280,
    density: "land-xxxhdpi"
  },
  {
    dir: "/app/android/drawable-port-ldpi",
    name: "screen",
    width: 200,
    height: 320,
    density: "port-ldpi"
  },
  {
    dir: "/app/android/drawable-port-mdpi",
    name: "screen",
    width: 320,
    height: 480,
    density: "port-mdpi"
  },
  {
    dir: "/app/android/drawable-port-hdpi",
    name: "screen",
    width: 480,
    height: 800,
    density: "port-hdpi"
  },
  {
    dir: "/app/android/drawable-port-xhdpi",
    name: "screen",
    width: 720,
    height: 1280,
    density: "port-xhdpi"
  },
  {
    dir: "/app/android/drawable-port-xxhdpi",
    name: "screen",
    width: 960,
    height: 1600,
    density: "port-xxhdpi"
  },
  {
    dir: "/app/android/drawable-port-xxxhdpi",
    name: "screen",
    width: 1280,
    height: 1920,
    density: "port-xxxhdpi"
  }
];

const splashTemplate = splash =>
  `<splash density="${splash.density}" src="${splash.src}" />`;

const platformTemplate = images => `
<platform name="android">
  ${images.join("\n  ")}
</platform>`;

module.exports = {
  splash,
  splashTemplate,
  platformTemplate
};
