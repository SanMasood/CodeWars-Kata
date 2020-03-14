const phoneNumber = require("../src/phone-numbers"); 
describe('phoneNumber', () => {
    it("returns array of digits in phone number format", ()=> {
     
        expect(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
        expect(phoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual("(111) 111-1111");

   /* test.assertEquals(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    test.assertEquals(phoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    test.assertEquals(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");*/
  });
})