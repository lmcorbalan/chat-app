const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);

// FIXME - move to config
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const PORT = process.env.PORT || 3333;
const env = process.env.NODE_ENV

if (env !== 'development') {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

server.listen(PORT);

require('./socket')(server);
