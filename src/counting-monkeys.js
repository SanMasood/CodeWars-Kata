
const monkeyCount = (number) => {
  const myArray = [];
  for (let i = 1; i<=number ; i++)
    myArray.push(i);
  return myArray;   
    }

module.exports = monkeyCount;