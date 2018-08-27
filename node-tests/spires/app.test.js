const expect = require('expect');
const jest = require('jest');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correct', () => {
        var spy = expect.createSpy();
        // var spy = jest.fn();
        // const drink = jest.fn();
        // handleSignup(spy);
        expect(spy).toHaveBeenCalled();
    });

    it('should call saveuser with user object', () => {
        var email = 'victor@enclave.vn';
        var password = '12@123';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email, password
        });
    });
});