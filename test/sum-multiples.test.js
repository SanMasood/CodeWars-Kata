const sumOfMultiples = require("../src/sum-multiples");

describe('sumOfMultiples', () => {
    it("returns sum of multiples of 3 and 5 between n", ()=> {
     
    expect(sumOfMultiples(5)).toEqual(8);
    expect(sumOfMultiples(10)).toEqual(33);
    expect(sumOfMultiples(100)).toEqual(2418);
    expect(sumOfMultiples(1000)).toEqual(234168);
    });
});


