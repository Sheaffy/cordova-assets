const gm = require("gm");

const img = process.argv[3];

gm(img).size((err, size) => {
  if (err) throw err;

  console.log(size.width, size.height);
});
