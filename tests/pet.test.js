const request = require('supertest');
const app = require('../app');
describe('Test the pet api', () => {
    test('Call api get pets', async () => {
        const res = await request(app).get('/petclinic/api/pets');
        expect(res.statusCode).toEqual(200);
        expect(res.body[0]).toHaveProperty('owner');
        expect(res.body[0]).toHaveProperty('visits');
    });
});