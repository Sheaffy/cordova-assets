const splash = require("./splash");

const command = process.argv[2];
const img = process.argv[3];

if (!command) throw new Error("Use `splash` or `icon`");
if (!img) throw new Error("No image specified");

if (command === "splash") {
  splash(img);
}
