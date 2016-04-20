'use strict';
require('babel-register');
var server = require('./server.jsx');
const PORT = process.env.PORT || 5000;
server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});
