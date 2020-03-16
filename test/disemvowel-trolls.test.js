const disemvowelTrolls = require("../src/disemvowel-trolls");

const string1 = 'This is a test string.';
const string2 = 'We are young LOL';
const string3 = 'Dont Be sO CasE SeNsItIve';

describe('diemvowelTrolls', () => {
    it("returns string after removing all vowels", ()=> {
     
        expect(disemvowelTrolls(string1)).toEqual('Ths s  tst strng.');
       // expect(disemvowelTrolls(string2)).toEqual('W r yng LL');
       // expect(disemvowelTrolls(string3)).toEqual('Dnt B s Cs SNstv');

    });

})
