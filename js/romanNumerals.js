

function toRoman(num) {
    // hash table initialized to contain keys with respect to roman Nums
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
      let result = ''; // string is used, and when letter to add is found, we're able to add it to 'result'
    
      for (key in hashtable) {// loop through each key. 
        result += key.repeat(Math.floor(num / hashtable[key])); //first divide whole num key and floored for remainder
        //if key > num then num will be floored to 0 and nothing happens
        // if key <= num then once it is floored, it'll give us how many times key can divide num evenly, that number is used
        // in key.repeated(floored number), then is added to result
        num %= hashtable[key]; // num is updated by modulus key.  Remainder keeps going for other hashtable keys
        //If the key was bigger then nothing happens.
      }
      
      return result;
}
exports.toRoman = toRoman //exports passes roman () to romanNumeralsSpec.js when invoked
