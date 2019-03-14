const express = require('express');
const db = require('./dogsModel');

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
  
// DELETE DOGS
server.delete('/api/dogs/:id', (req, res) => {
  const { id } = req.params

  db.
    remove(id)
    .then(dog => {
        if (dog) {
            res.status(204).end();
        } else {
            res.status(404).json({ success: false, message: "The dog with the specified ID does not exist." });
        }
    })
        .catch(err => {
            res.status(500).json({ error: "The dog could not be removed" })  
    })
})



module.exports = server;