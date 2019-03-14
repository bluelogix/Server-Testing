const db = require('../data/dbConfig')
const Dogs = require('./dogsModel');

describe('dogs model', () => {
    describe('insert()', () => {
        

        it.skip('should insert dog name', () => {
            return Dogs.insert({ name: 'Golden Retriever'})

          
        })
    })
})