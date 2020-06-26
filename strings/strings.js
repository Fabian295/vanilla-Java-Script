let str1 = new String('Toy Story');
let str2 = String('Wall-e');
let str3 = 'Cars';

let result = str1.toUpperCase();
let result2 = str1.toLowerCase();
let result3 = 'Mosnters Inc'.toUpperCase();
let result4 = 'Mosnters Inc'.toLowerCase();

console.log(result, result2, str1);
console.log(result3, result4, str1);

// str.substring(indexStart [, indexEnd])
let r = str2.substring(4, 5); // ' - '
console.log(r);

// str.substr(indexStart, length)
let r2 = str2.substr(4, 1); // ' - '
console.log(r2);

let r3 = str1.slice(4, 9);
console.log(r3);

let r4 = str1.indexOf('o');
let r5 = str1.lastIndexOf('o');
console.log(r4, r5);

let r6 = 'text'.concat(str1, ' ', str2);
let r7 = str3.concat(' ', str1, ' ', str2);
console.log(r6);
console.log(r7);
