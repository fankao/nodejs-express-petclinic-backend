const request = require('supertest');
const app = require('../app')
describe('Test the owner', () => {
    beforeEach(async () => {

    })
    test('Should get all owners', async () => {
        const res = await request(app).get('/api/owners');
        expect(res.statusCode).toEqual(200);
        expect(res.body[0]).toHaveProperty('pets');
    });

    test('Should not create new owner', async () => {
        const body = {
            address: "1253 Centre Park",
            city: "",
            firstName: "John",
            lastName: "Han",
            telephone: "7867362551"
        }
        const res = await request(app)
            .post('/api/owners')
            .send(body);
        expect(res.statusCode).toEqual(500);
    });
});