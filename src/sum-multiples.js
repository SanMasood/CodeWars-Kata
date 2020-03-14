function sumOfMultiples (n){
    let result = 0;
    for(let i=3;i<=n;i++){
      if(i%3===0 || i%5===0){result += i;}
    }
    return result;

}





module.exports = sumOfMultiples;