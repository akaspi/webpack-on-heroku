const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const staticPath = path.join(path.resolve(path.dirname()), '');
var config = require('../config.json');

app.use(express.static(staticPath));

server.listen(process.env.PORT || config.prodPort, () => {
  console.log('Production server listening at port %d', server.address().port);
});