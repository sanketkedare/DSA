
// Methods of Strings

//----------------------------------------------------------------

// chatAt()
// const str = "Hello, world!";
// let charector = str.charAt(2); // 'l'

// ----------------------------------------------------------------

// charCodeAt() - Returns the character code [ASCII]

// const str = "Hello, world!";
// let code = str.charCodeAt(2);
// console.log(code); // 108

// ----------------------------------------------------------------

// concat()

// const str1 = "Hello, ";
// const str2 = "World!";
// const str3 = str1.concat(str2); // "Hello, world!"


// ----------------------------------------------------------------

// fromCharCode()

// const charCode = 105;
// const charector = String.fromCharCode(charCode);
// console.log(charector);   // 'i'


// ----------------------------------------------------------------

// indexOf()

// const str = "Hello, world!";
// const index = str.indexOf('o');
// console.log(index); // 4

// ----------------------------------------------------------------

// lastIndexOf()

// const str = "Hello, world!";
// const lastIndex = str.lastIndexOf('l');
// console.log(lastIndex); //10

// ----------------------------------------------------------------

// replace()

// const str = "Hello, world!";
// const str1 = "Sanket";
// const str2 = str.replace('world', str1);
// console.log(str2) // Hello, Sanket!

// ----------------------------------------------------------------

// search()

// const str = "Hello, world!";
// const str1 = "world!";
// const index = str.search(str1);
// console.log(index) // 7

// ----------------------------------------------------------------

// slice();

// const str = "Hello, world!";
// const str1 = str.slice(3,9);
// console.log(str1); //  'lo, wo'


// ----------------------------------------------------------------

// split()

// const str = "Hello, world!";
// const str1 = str.split('');
// console.log(str1);          
// // ['H', 'e', 'l', 'l','o', ',', ' ', 'w','o', 'r', 'l', 'd','!']

// ----------------------------------------------------------------

// join()

const arr = ['H', 'e', 'l', 'l','o', ',', ' ', 'w','o', 'r', 'l', 'd','!'];
const str = arr.join('');
console.log(str);  // "Hello, world!"

// ----------------------------------------------------------------
 
// substring() - Simmiler to substr() but can't except -ne value

// const str = "Hello, world!";
// const str1 = str.substring(2,10);
// console.log(str1);   // llo, wor

// ----------------------------------------------------------------

// substr()  -> Forbidden Method (Removed)

// const str = "Hello, world!";
// const str1 = str.substr(2,10);
// console.log(str1);   // llo, world

// ----------------------------------------------------------------

// toLowerCase()
// const str = "Hello, world!";
// const str1 = str.toLowerCase();
// console.log(str1);   // hello, world!

// ----------------------------------------------------------------

// toUpperCase()

// const str = "hello, world!";
// const str1 = str.toUpperCase();
// console.log(str1);   // HELLO, WORLD!

// ----------------------------------------------------------------
