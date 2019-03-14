const express = require('express');
const db = require('../data/dbConfig.js');
const server = express();

server.use(express.json());


server.get('/',  (req, res) => {
  res.status(200).json({ api: 'Testing' });
});


//POST DOGS

server.post('/api/dogs', (req, res) => {
  const { name } = req.body

  if(!name) {
    res.status(400).json({error: 'did not work'})
   
  } else {
     db.insert(name)
    res.status(201).json({ message: 'working'})
  }
})
    



module.exports = server;