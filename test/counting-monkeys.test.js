const monkeyCount = require("../src/counting-monkeys"); 
//const { monkeyCount } = require("../src/counting-monkeys");

describe("monkeyCount", () => {
    it("returns array of each monkey counted", ()=> {
        expect(8).toEqual([1,2,3,4,5,6,7,8]);
        //expect(4).toEqual('[1,2,3,4]');
       
    })
});