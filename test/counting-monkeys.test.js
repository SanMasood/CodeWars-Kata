const monkeyCount = require("../src/counting-monkeys"); 
//const { monkeyCount } = require("../src/counting-monkeys");

describe("monkeyCount", () => {
    it("returns array of each monkey counted", ()=> {
        let result = monkeyCount(8);
        let expected = [1,2,3,4,5,6,7,8];
        expect(result).toEqual(expected);
       
    })
});