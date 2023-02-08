

function toRoman(num) {
    const hashtable = {
        M:  1000,
        CM: 900,
        D:  500,
        CD: 400,
        C:  100,
        XC: 90,
        L:  50,
        XL: 40,
        X:  10,
        IX: 9,
        V:  5,
        IV: 4,
        I:  1,
      };  
      let result = '';
    //   
      for (key in hashtable) {
        result += key.repeat(Math.floor(num / hashtable[key]));
        num %= hashtable[key];
      }
      
      return result;
}
exports.toRoman = toRoman
