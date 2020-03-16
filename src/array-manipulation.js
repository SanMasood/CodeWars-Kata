function arrayLength(myArray){
    return myArray.length;
}

function arraynthElement(myArray,n){

    return myArray[n];
}

function filterArray(myArray){

    return myArray.filter(value => value%2==0);
}
module.exports = {arrayLength, arraynthElement, filterArray};