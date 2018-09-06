const expect = require('expect');
const { isRealString } = require('./validation');


describe('IsRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });
    it('should reject string with only spaces', () => {
        var res = isRealString('    ');
        expect(res).toBe(false);
    });
    it('should allow sring with non-space characters', () => {
        var res = isRealString(' Andrew   ');
        expect(res).toBe(true);
    })
});