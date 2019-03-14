const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig.js');

describe('server.js', () => {
    it('should grab testing env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

describe('GET /', () => {
    it('should return 200 status', () => {
        return request(server)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200);
        })
        
    })
    it('should return JSON',  () => {
            return request(server).get('/')
      
            .then(res => {
                expect(res.type).toBe('application/json');
            })
          });
})

describe('POST /api/dogs', () => {
    it('should return 400 status', () => {
        const body = {name: ''}
        return request(server)
        .post('/api/dogs')
        .send(body)
        .then(res => {
            expect(res.status).toBe(400);
          });
    })

    it('should return 201 status', () => {
        const body = {name: 'something'}
        return request(server)
        .post('/api/dogs')
        .send(body)
        .then(res => {
            expect(res.status).toBe(201);
          });
    })



})












})// end main describe