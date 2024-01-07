const express = require("express");
const app = express();
const port = 5000;

app.get("/version/:version", function (req, res) {
  const version = req.params.version;

  res.setHeader("use-as-dictionary", 'match="/app.*.js"');

  res.send(`
    <html lang="en">
    <head>
      <script src="./app.v${version}.js"></script>
    </head>
    <body>
      <h1 id="version_version">Version ${version}</h1>
    </body>
    </html>
  `);
});

app.listen(port, function () {
  console.log(`Application running on ${port}!`);
});
