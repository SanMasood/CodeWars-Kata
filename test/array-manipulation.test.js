const {arrayLength, arraynthElement, filterArray} = require("../src/array-manipulation");

const numArray = [1,2,3,4,5,6,7,8,9,0];
const numArray2 = [56,90,34,21,76];
const namesArray = ['Samia', 'Sara', 'Sana'];

describe('arrayLength', () => {
    it("returns length of array", ()=> {
     
        expect(arrayLength(numArray)).toEqual(10);
        expect(arrayLength(namesArray)).toEqual(3);
    });

})

describe('arraynthElement', () => {
    it("returns nth element of array", ()=> {
     
        expect(arraynthElement(numArray, 5)).toEqual(6);
        expect(arraynthElement(namesArray, 1)).toEqual('Sara');
    });

})
describe('filterArray', () => {
    it("returns array with elements that are even", ()=> {
     
        expect(filterArray(numArray)).toEqual([2,4,6,8,0]);
        //expect(findingElement(namesArray, 1)).toEqual('Samia');
    });

})

