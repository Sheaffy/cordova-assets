const splash = [
  {
    dir: "/app/ios",
    name: "Default@2x~universal~anyany",
    width: 2732,
    height: 2732
  }
];

const splashTemplate = splash => `<splash src="${splash.src}" />`;

const platformTemplate = images => `
<platform name="ios">
  ${images.join("\n  ")}
</platform>`;

module.exports = {
  splash,
  splashTemplate,
  platformTemplate
};
