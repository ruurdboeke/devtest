'use strict';
var express = require('express');

const app = express();
app.use(express.static('public'));
app.use((req, res) => {
  const HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Isomorphic Redux Demo</title>
    </head>
    <body>
      <div id="react-view"></div>
      <script type="application/javascript" src="/bundle.js"></script>
    </body>
  </html>
  `;
  

  res.end(HTML);
});

module.exports = app;