const request = require('supertest');
const server = require('./server.js');

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
})








})// end main describe