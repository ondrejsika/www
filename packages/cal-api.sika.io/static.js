const fs = require("fs");
const getCal = require("./generator.js");

if (fs.existsSync("out")) {
  fs.rmdirSync("out");
}
fs.mkdirSync("out");

fs.writeFileSync(
  "out/index.html",
  `
<a href="/all-training.ics">all-training.ics</a>
`
);
fs.writeFileSync("out/all-training.ics", getCal());
