const expect = require('expect');
const utils = require('./utils')


describe('utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44);
            /*if (res != 44) {
                throw new Error(`expected 44, but got ${res}.`);
            }*/

        });
    });
    

    it('should async add two numbers', (done) => {
        utils.aSyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7);
            done();
        });
    });

    it('it should square a number', () => {
        var res = utils.square(3);
        expect(res).toBe(9);
    });

    it('it should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25);
            expect(typeof res).toBe('number');
            done();
        });

    });
});


//should verify first and last name and set
//assert it includes first name and last name with proper values
it('should set firstname and lastname', () => {
    var user = { location: 'Philadelphia', age: 25 };
    var res = utils.setName(user, 'Andrew Mead');

    expect(res).toMatchObject({
        firstName: 'Andrew',
        lastName: 'Mead'
    });
});