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

const icons = [
  {
    dir: "/app/android/drawable-ldpi",
    name: "icon.png",
    width: 36,
    height: 36,
    density: "ldpi"
  },
  {
    dir: "/app/android/drawable-mdpi",
    name: "icon.png",
    width: 48,
    height: 48,
    density: "mdpi"
  },
  {
    dir: "/app/android/drawable-hdpi",
    name: "icon.png",
    width: 72,
    height: 72,
    density: "hdpi"
  },
  {
    dir: "/app/android/drawable-xhdpi",
    name: "icon.png",
    width: 96,
    height: 96,
    density: "xhdpi"
  },
  {
    dir: "/app/android/drawable-xxhdpi",
    name: "icon.png",
    width: 144,
    height: 144,
    density: "xxhdpi"
  },
  {
    dir: "/app/android/drawable-xxxhdpi",
    name: "icon.png",
    width: 192,
    height: 192,
    density: "xxxhdpi"
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
  icons,
  splashTemplate,
  platformTemplate
};
