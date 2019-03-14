const express = require('express');

// const hobbits = require('../hobbits/hobbitsModel.js');

const server = express();

server.use(express.json());

server.get('/',  (req, res) => {
  res.status(200).json({ api: 'Testing' });
});



module.exports = server;