function disemvowelTrolls(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
     return str.split('').filter(item=>!vowels.includes(item.toLowerCase())).join(''); 
   
   }

module.exports = disemvowelTrolls;