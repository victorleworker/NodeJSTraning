const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('server test', () => {
    describe('Get /', () => {
        it('it should return hello work response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toMatchObject({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });

    describe('Get /users', () => {
        //make a new test
        // assert 200
        //Assert that you exist in users araray
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toEqual(expect.arrayContaining([{
                        name: 'Mike',
                        age: 27
                    }]));
                }).end(done);;
        });
    });   
});


