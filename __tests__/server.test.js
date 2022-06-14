'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Server Tests', () => {
    describe('GET/Read requests', () => {
        test('Responds with status code 200 to standard / route', async () => {
            const response = await request.get('/');
            expect(response.status).toEqual(200);
        });
        test('Hello route is working.', async () => {
            const response = await request.get('/hello');
            expect(response.status).toEqual(200);
            expect(response.text).toEqual('Hello!');
        });
    });
});
