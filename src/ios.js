const splash = [
  {
    dir: "/app/ios",
    name: "Default@2x~universal~anyany",
    width: 2732,
    height: 2732
  }
];

const icons = [
  { dir: "/app/ios", name: "icon.png", width: 57, height: 57 },
  { dir: "/app/ios", name: "icon@2x.png", width: 114, height: 114 },
  { dir: "/app/ios", name: "icon-40.png", width: 40, height: 40 },
  { dir: "/app/ios", name: "icon-40@2x.png", width: 80, height: 80 },
  { dir: "/app/ios", name: "icon-50.png", width: 50, height: 50 },
  { dir: "/app/ios", name: "icon-50@2x.png", width: 100, height: 100 },
  { dir: "/app/ios", name: "icon-60.png", width: 60, height: 60 },
  { dir: "/app/ios", name: "icon-60@2x.png", width: 120, height: 120 },
  { dir: "/app/ios", name: "icon-60@3x.png", width: 180, height: 180 },
  { dir: "/app/ios", name: "icon-72.png", width: 72, height: 72 },
  { dir: "/app/ios", name: "icon-72@2x.png", width: 144, height: 144 },
  { dir: "/app/ios", name: "icon-76.png", width: 76, height: 76 },
  { dir: "/app/ios", name: "icon-76@2x.png", width: 152, height: 152 },
  { dir: "/app/ios", name: "icon-small.png", width: 29, height: 29 },
  { dir: "/app/ios", name: "icon-small@2x.png", width: 58, height: 58 },
  { dir: "/app/ios", name: "icon-small@3x.png", width: 87, height: 87 }
];

const iconTemplate = icon =>
  `<icon src="${icon.src}" width="${icon.width}" height="${icon.height}" />`;

const splashTemplate = splash => `<splash src="${splash.src}" />`;

const platformTemplate = images => `
<platform name="ios">
  ${images.join("\n  ")}
</platform>`;

module.exports = {
  splash,
  icons,
  iconTemplate,
  splashTemplate,
  platformTemplate
};
