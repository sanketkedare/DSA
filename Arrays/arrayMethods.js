// Methods of Arrays

/** 

let myArray = ["apple", "banana", "orange"];

myArray.push("pear");                   // Output    ["apple", "banana", "orange", "pear"]
myArray.pop();                          // Output    ["apple", "banana"]
myArray.shift();                        // Output    ["banana", "orange"]
myArray.unshift("pear", "watermelon");  // Output    ["pear", "watermelon", "apple", "banana", "orange"]

*/

// -------------------------------------------------------------------

// Slice

/* 
This method returns a portion of an array. The original array is not modified, 
and the result is a new array containing the selected elements. This method is 
commonly used to make a copy of a portion of an array. 
*/

// let myArray = ["apple", "banana", "orange"];
// let newArray = myArray.slice(1, 2);

// console.log(newArray);

// // Output  ["banana"]


// ----------------------------------------------------------------


// Splice

/*
 This method adds or removes elements from an array. The original array is modified,
 and the removed elements (if any) are returned as the result. This method is commonly 
 used to add or remove elements from an array at a specific position.
*/

// let myArray = ["apple", "banana", "orange"];
// myArray.splice(1, 1, "pear", "watermelon");

// console.log(myArray);

// // Output  ["apple", "pear", "watermelon", "orange"]


// ----------------------------------------------------------------


// Concat

/* 
This method joins two or more arrays. The original arrays are not modified, and the 
result is a new array containing all the elements of the original arrays. This method
is commonly used to combine multiple arrays into a single array.
*/

// let myArray1 = ["apple", "banana", "orange"];
// let myArray2 = ["pear", "mango"];
// let newArray = myArray1.concat(myArray2);

// console.log(newArray);

// // Output    ["apple", "banana", "orange", "pear", "mango"]


// ----------------------------------------------------------------

// join 

/*
This method joins all elements of an array into a string. The original array is not 
modified, and the result is a new string containing all the elements separated by a 
specified separator. This method is commonly used to convert an array into a 
comma-separated string.
*/

// let myArray = ["apple", "banana", "orange"];
// let myString = myArray.join(", ");

// console.log(myString);

// // Output     "apple, banana, orange"


// ----------------------------------------------------------------

// reverse

/*
This method reverses the order of elements in an array. The original array is modified, 
and the result is the reversed array. This method is commonly used to reverse the order 
of elements in an array.
*/

// let myArray = ["apple", "banana", "orange"];
// myArray.reverse();

// console.log(myArray);

// // Output   ["orange", "banana", "apple"]


// ----------------------------------------------------------------

// sort

/* 
This method sorts the elements of an array. The original array is modified, and the 
result is the sorted array. This method is commonly used to sort the elements of an 
array in ascending or descending order.
*/

// let myArray = ["banana", "apple", "orange"];
// myArray.sort();

// console.log(myArray);

// // Output   ["apple", "banana", "orange"]


// ----------------------------------------------------------------

// filter(): 

/* 
This method creates a new array with all elements that pass the test implemented by 
the provided function. It is commonly used to filter elements from an array based on 
a condition.
*/

// let myArray = [1, 2, 3, 4, 5];
// let newArray = myArray.filter(function(element) {
//   return element % 2 === 0;
// });

// console.log(newArray);

// // Output    [2, 4]

// ----------------------------------------------------------------

// map

/* 
This method creates a new array with the results of calling a provided function on every 
element in the calling array. It is commonly used to transform the elements of an array. 
*/

// let myArray = [1, 2, 3];
// let newArray = myArray.map(function(element) {
//   return element * 2;
// });

// console.log(newArray);

// // Output   [2, 4, 6]

// ----------------------------------------------------------------

// reduce 

/*
This method applies a function against an accumulator and each element in the 
array (from left to right) to reduce it to a single value. It is commonly used to 
calculate a single value based on the elements of an array.
*/

// let myArray = [1, 2, 3, 4, 5];
// let sum = myArray.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// });

// console.log(sum);

// // Output    15


// ----------------------------------------------------------------

// includes

/*
This method determines whether an array includes a certain value among its entries. 
It is commonly used to check if an array contains a specific element.
*/

// let myArray = ["apple", "banana", "orange"];
// let containsBanana = myArray.includes("banana");

// console.log(containsBanana);

// // Output   true


// flat

/* 
This method creates a new array with all sub-array elements concatenated into it 
recursively up to the specified depth. It is commonly used to flatten an array that 
contains nested arrays.
*/

// let myArray = [1, 2, [3, 4, [5, 6]]];
// let flattenedArray = myArray.flat(2);

// console.log(flattenedArray);

// // Output  [1, 2, 3, 4, 5, 6]