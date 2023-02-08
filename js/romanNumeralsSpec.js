var rn = require("./romanNumerals");//require() takes in a file and since 
//romanNumeralsSpecs.js is along the same path as romanNumerals.js

// console.log(rn.toRoman)
console.log(rn.toRoman(1) === 'I');// this line invokes toRoman in other file because
console.log(rn.toRoman(3) === 'III'); // rn was declared on line 1 of this file and
console.log(rn.toRoman(4) === 'IV'); // initialized toRoman exporting towards this file.