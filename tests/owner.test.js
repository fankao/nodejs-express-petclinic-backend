const request = require('supertest');
const app = require('../app');
const ownerApi = require('../apis/ownerApi')
describe('Test the owner', () => {
    beforeEach(async () => {

    })
    test('Call api get owner', async () => {
        const res = await request(app).get('/petclinic/api/owners');
        expect(res.statusCode).toEqual(200);
        expect(res.body[0]).toHaveProperty('pets');
    });
});