# Arrays

## Introduction to Array

**In JavaScript, an array is a data structure that can hold multiple values of different data types in a single variable. Arrays are zero-indexed, meaning the first element is accessed with index 0. You can create and manipulate arrays using various methods and properties.**


### What is an Array?

Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. It provides a simple and efficient way to store and manipulate data, making them a valuable tool for any programmer.


### Why is an Array data structure required?

*Here are some of the main reasons why we use arrays:*


- **Storing multiple values:** Arrays in JavaScript allow us to store multiple values of the different data type in a single variable. This is useful when we need to work with a large amount of data, such as a list of names or numbers.

- **Easy access to data:** We can access an element by its index (position within the array), which allows us to quickly retrieve the data we need.

- **Efficient memory management:** Arrays are a very efficient way to manage memory. They allow us to allocate a fixed amount of memory for a specific number of elements, which reduces memory fragmentation and helps to optimize performance.

- **Sorting and searching:** Arrays are also useful for sorting and searching data. We can use built-in functions to sort an array in ascending or descending order, or to search for a specific value within the array.



## Types of Array

*JavaScript has two types of arrays: **One-dimensional** arrays and **Multi-dimensional** arrays.*

### One-Dimensional Arrays

A 1-D array can be visualized as a line of containers where each container can hold one item.

```javascript
let array = [1, 2, 3, 4];
```

The items in the array are given a non-negative numeric label known as an index, which indicates their location in the array. It's important to note that arrays usually begin with an index of 0. The index starts from zero and goes up to the length of the array minus one.


**Here's an another example of a one-dimensional array:**

```javascript
let fruits = ["apple", "banana", "orange", "kiwi"];
```
To access a value in a one-dimensional array, you can use the index of the value. 

**For example:** to access the second value in the fruits array, you can use the index 1.

```javascript
let secondFruit = fruits[1];    // "banana"
```

You can also loop through the values in a one-dimensional array using a for loop:

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

One-dimensional arrays are commonly used to store lists of items or sets of values. They are ideal for situations where you have a collection of data that you want to be able to access quickly and easily. For example, an array of numbers could be used to store the scores of students in a class.


### Multi-Dimensional Arrays

In JavaScript, a multi-dimensional array is an array of arrays. Each element in the array is itself an array. Multi-dimensional arrays are used to store tables of data or matrices.

A 2-D array can be visualized as a carton used for storing eggs. We can imagine the 3 rows as the first input index and 4 columns as the second input index when accessing the 2-d array.

```javascript
let matrix = [
  [1,  2,  3],
  [4,  5,  6],
  [7,  8,  9],
	[10, 11, 12]
];
```

To access a value in a multi-dimensional array, you need to use two indices: one for the row and one for the column. For example, to access the value in the second row and third column of the matrix array, you can use the indices [1][2]:

```javascript
let value = matrix[1][2];  // 6
let value1 = matrix[3][1]; // 11
```

You can also loop through the values in a multi-dimensional array using nested for loops:

```javascript
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
```

Multi-dimensional arrays are commonly used to **store tables of data or matrices**. They are ideal for situations where you need to organize data into rows and columns. For example, a two-dimensional array could be used to store the sales figures for a company, with each row representing a different month and each column representing a different product.
 
## Working with Array

**Creating an Array**: There are two ways of creating an Array in JavaScript: Array Constructor and Array Literal.

### Array Constructor
To create an array in JavaScript, we can use the Array constructor:

We can also create an array with initial values using the constructor.
In this example: we create an array called myArray with three string values.

```javascript
let myArray = new Array("apple", "banana", "orange");
```

### Array Literal

We can also create an array using the array literal notation, which is a shorthand way of creating an array:

We can also create an array with initial values using the array literal notation.

In this example: we create an array called myArray with three string values.

```javascript
let myArray = ["apple", "banana", "orange"];
```

- 1] **type_of_variable**: JavaScript have 3 types of variables, i.e. var, let, and const.
- 2] **variable_name**: Variable name can be anything which begins with a letter, _ and $, except for some reserved keywords.
- 3] **data_elements**: Array elements are entered inside the square brackets [ ]. Array can be initialized as an empty array.
- 4] **new keyword**: new keyword is used to initialize a constructor.
- 5] **Array constructor**: It is used to create Array objects.