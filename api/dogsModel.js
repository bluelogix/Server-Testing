const db = require('../data/dbConfig.js');

module.exports = {
    insert, 
    remove
}

function insert(user) {
    return db('dogs')
      .insert(dog)
  }

  function remove(id) {
    return db('dogs')
      .where('id', id)
      .del();
  }