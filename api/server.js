const express = require('express');

const server = express();

server.use(express.json());


server.get('/',  (req, res) => {
  res.status(200).json({ api: 'Testing' });
});


//POST DOGS

server.post('/api/dogs', () => {
  const { name } = req.body;

  res.status(200).json({ message: 'Added new dog!'})
 
})


module.exports = server;