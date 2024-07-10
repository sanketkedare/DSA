# Data structure and Algorithms

## Data structure

### What is Data structure?

**Data Structure is a mechanism for gathering and arranging data to enable us to conduct operations on it efficiently. Data Structures involve organizing data elements in a specific relationship for improved storage and organization.**

### Classification of Data structure

Data structures can be classified based on various characteristics like their nature, organization, and behavior.
We can classify Data Structures into two categories:

#### 1] Primitive Data Structures:

In JavaScript, primitive data types are basic data types that are not objects and do not have any methods or properties. They are immutable, meaning their values cannot be changed once they are created.

- Numbers: Represents numeric values.

- Strings: Represents sequences of characters.

- Booleans: Represents true or false values.

- Null: Represents the intentional absence of any object value.

- Undefined: Represents a declared variable without a value assigned.

- Symbols: Represents unique and immutable values used as object properties.


#### 2] Non-primitive Data Structures:

In JavaScript, non-primitive data types are data structures that can hold multiple values and have methods and properties associated with them. These data structures are implemented as objects in JavaScript.

- Array: An ordered list of values, often of the same type, accessed by their index. Arrays in JavaScript are mutable and have methods for manipulating and accessing elements.

- Object: A collection of key-value pairs where the values can be of any data type, including other objects. Objects in JavaScript are mutable and can have properties and methods.

- Map: A collection of key-value pairs where the keys can be of any data type. Maps in JavaScript provide an efficient way to store and retrieve data based on keys and have methods for working with the key-value pairs.

- Set: A collection of unique values where each value can only occur once. Sets in JavaScript provide methods for adding, removing, and checking the presence of elements.

- Linked List: A linked list is a data structure where elements, known as nodes, are connected via pointers or references. Each node contains data and a reference to the next node.

- Tree: Trees are a non-linear data structure, meaning they do not have a sequential arrangement of elements. Unlike linear data structures such as arrays, linked lists, and stacks, trees allow for a parent-child relationship between elements. In trees, each node can have zero or more child nodes, and each child node can have its own child nodes.

- Graph: A graph data structure is a collection of nodes (vertices) and edges that connect them. Graphs are used to represent complex relationships between objects or entities. They are widely used in computer science, including in data structures and algorithms, computer networking, and database management.


## Algorithms

### What is an Algorithm?

**An algorithm is a finite set of instructions or logical steps that are written in a specific order to achieve a predetermined task.**
An algorithm is not the complete code or program; it is the core logic, which can be expressed through pseudocode or flowchart.

#### To be considered a valid algorithm, it must meet the following requirements:

- Inputs: It should have zero or more inputs provided externally to the algorithm.
- Outputs: It must have at least one output obtained.
- Definiteness: Every step of the algorithm must be clearly and precisely defined.
- Finiteness: The algorithm must have a finite number of steps.
- Correctness: Every step of the algorithm must produce an accurate and correct output.

#### Qualities of a Good Algorithm

- Clearly define input and output: Algorithms should precisely specify the expected input and output, leaving no room for ambiguity.
- Provide clear and unambiguous steps: Each step within the algorithm should be explicit and easy to understand, leaving no confusion about how to proceed at any point.
- Emphasize efficiency: Algorithms should strive to be the most effective solution among various methods to solve a problem, focusing on optimal performance and resource utilization.
- Be language-agnostic: An algorithm should not be tied to specific computer code but instead be written in a way that allows its implementation in various programming languages, promoting versatility and adaptability.

### Algorithmic Analysis

Suppose you have to find a particular book in a library. You could look for it by wandering aimlessly through the shelves until you stumble upon it, or you could ask a librarian for help. However, the most efficient way to find the book would be to use the library's catalog system.

Similarly, in computer science, when solving a problem, there can be multiple algorithms to choose from, each with varying levels of efficiency (for example, sorting problem has lot of algorithms like insertion sort, selection sort, quick sort and many more). Algorithm analysis helps us determine which is efficient in terms of time and space consumed.

#### The performance of an algorithm is measured on the basis of the following properties :

- Space Complexity
- Time Complexity


### Space Complexity

**When an algorithm is running, it needs space to store inputs, variables, and program code. Space complexity is the amount of memory that is required to run an algorithm or process.**

*Let's take two examples to illustrate space complexity:*
#### 1] Constant Space Complexity: O(1)

```javascript

function getFirstElement(array) {
  return array[0];
}

let arr = [1, 2, 3, 4, 5];
console.log(getFirstElement(arr));

// Output
1

```

*In this example, no matter how large the input array is, the function only ever uses one variable (array). Therefore, it has a constant space complexity of O(1).*


#### 2] Linear Space Complexity: O(n)

```javascript

function getAllElements(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];
  }
  return newArray;
}

let arr = [1, 2, 3, 4, 5];
console.log(getAllElements(arr));

// Output
[1, 2, 3, 4, 5]

```

*In this example, the function creates a new array that is a copy of the input array. Therefore, the amount of memory used by the function (i.e., the space complexity) grows linearly with the size of the input, giving it a space complexity of O(n).*

**It is crucial for developers to consider the space complexity of their algorithms because it directly affects the performance of a program. If an algorithm requires too much memory, it may cause the system to slow down or crash due to a lack of memory.**


### Time Complexity

**Time complexity is the time taken by the algorithm to execute each set of instructions. When solving a problem using an algorithm, it's important to choose the most efficient one to save time and computational resources.**

The time complexity of an algorithm is closely linked to the size of its input. As the input size grows, so does the algorithm's run time.

*Let's take two examples to illustrate time complexity:*

#### 1] Constant Time Complexity: O(1)

This means that the algorithm's execution time remains constant, regardless of the size of the input. Whether you have 10 elements or 10 million elements, the algorithm will take approximately the same amount of time to complete its task.

```javascript

function getFirstElement(array) {
  return array[0];
}

let arr = [1, 2, 3, 4, 5];
console.log(getFirstElement(arr));

// Output
1

```

*In this example, no matter how large the input array is, the function only needs to perform one operation: returning the first element. Therefore, it has a constant time complexity of O(1).*


#### 2] Linear Time Complexity: O(n)

This means that the time taken by an algorithm grows linearly with the size of the input. As the input size (n) increases, the time taken to complete the algorithm also increases proportionally.

```javascript

function findElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    } }
  return -1;
}

let arr = [1, 2, 3, 4, 5];
console.log(findElement(arr, 3));

// Output
2

```

*In this example, in the worst-case scenario, the function has to look at every element in the array once. Therefore, the time complexity grows linearly with the size of the input, giving it a time complexity of O(n).*

It's important to check if an algorithm is stable before running the analysis and to have a good understanding of the data being analyzed.



## Introduction to Asymptotic Analysis

**Asymptotic notation is a method used to compare the efficiency of different algorithms. It is not feasible to compare two algorithms directly as it heavily depends on the hardware and tools used for the comparison, such as the operating system, CPU model, and processor generation. Even if the time and space complexity of two algorithms are calculated on the same system, their performance may still be affected by subtle changes in the system environment.**

Asymptotic analysis is used to compare the time and space complexity of two algorithms based on the changes in their performance with the increment or decrement in the input size.

### There are three main types of asymptotic notations: 
- 1] Big-Oh (O) notation
- 2] Big Omega (Ω) notation
- 3] Big Theta (Θ) notation

*Please refer **./Notes/Asymptotic_Analysis.md** for more information about these types of asymptotic notations*


## Analyzing Time Complexity

**Measuring the time complexity of a code involves analyzing how the execution time of the code grows with respect to the input size. It provides valuable insights into how the code's performance scales as the input size increases. There are various methods to measure time complexity, but one common approach is to use Big O notation.**

*Here's a step-by-step guide to measuring the time complexity of a code:*

- 1] Identify the Input Size: Determine what parameter(s) influence the size of the input to the code. For example, if your code operates on an array, the input size is the length of the array, denoted as "n."

- 2] Identify the Operations: Identify the significant operations in the code that contribute to its overall execution time. Common operations include loops, recursive calls, and specific arithmetic or logical operations.

- 3] Count the Basic Operations: For each identified operation, count the number of times it is executed in terms of the input size "n." Express this count as a function of "n" without considering any constant factors.

- 4] Find the Dominant Term: If the code contains multiple operations, identify the one with the highest growth rate concerning "n." This dominant term represents the primary factor determining the time complexity.

- 5] Express the Time Complexity: Write the time complexity using Big O notation by retaining only the dominant term and removing any constant factors or lower-order terms.


*When analyzing the efficiency of an algorithm, we consider three cases*

- 1]Best case: The best case scenario is when the algorithm completes its task in the shortest possible time, and this time acts as a lower bound for the algorithm's time 
complexity.

- 2]Average case: In the average case, the sum of the running times for every possible input combination is calculated, and the average is taken. This average time serves 
as both the lower and upper bound for the algorithm's time complexity.

- 3]Worst case: The worst-case scenario is when the algorithm takes the longest time to complete its task, and this time serves as the upper bound for the algorithm's time 
complexity. 


Considering these different cases helps us determine the efficiency of an algorithm in different scenarios, allowing us to choose the best algorithm for a given problem.

- 

### Common Time Complexities

- O(1) - Constant Time: The execution time remains constant, regardless of the input size.
- O(log n) - Logarithmic Time: The execution time increases logarithmically with the input size.
- O(n) - Linear Time: The execution time grows linearly with the input size.
- O(n log n) - Linearithmic Time: The execution time increases as a product of the input size and its logarithm.
- O(n^2) - Quadratic Time: The execution time grows quadratically with the input size.
- O(2^n) - Exponential Time: The execution time grows exponentially with the input size.

*Let's consider an example to measure the time complexity of a code that finds the maximum element in an array of integers.*

```javascript

function findMaxElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

```

### Explanation

**In this code, the input size is the length of the array arr, denoted as "n." We can analyze the time complexity step by step:**

- Identify the Input Size: The input size is the length of the array, "n."
- Identify the Operations: The main operation is the loop that iterates through the array elements.
- Count the Basic Operations: The loop runs from index 1 to n-1, so it executes "n-1" times.
- Find the Dominant Term: The loop is the only significant operation, and it runs "n-1" times.
- Express the Time Complexity: The time complexity can be expressed as O(n) since the loop's execution time grows linearly with the input size "n."
 



## Why learn Data structures and Algorithms?

**Learning data structures and algorithms is essential for several reasons:**

- 1] Problem-Solving Skills: Data structures and algorithms provide a systematic approach to solving complex problems efficiently. By learning them, you can develop strong problem-solving skills that are applicable in various areas of computer science and beyond.

- 2] Optimize Code: Understanding different data structures and algorithms enables you to write more efficient code. Efficient algorithms can significantly improve the performance of software applications, making them faster and more responsive.

- 3] Interview Preparation: Data structures and algorithms are fundamental topics in technical interviews for software engineering and computer science roles. Learning these concepts thoroughly can increase your chances of success in job interviews.

- 4] Algorithm Design: Learning algorithms helps you design your solutions and design them better. You'll be able to identify trade-offs, choose appropriate data structures, and optimize your code.

- 5] Career Advancement: Many tech companies highly value candidates with strong knowledge of data structures and algorithms. Having these skills can open up better job opportunities and career advancement.

- 6] Understanding Libraries and APIs: Knowledge of data structures and algorithms helps you better understand how various libraries and APIs in programming languages work, making you more effective in using them.

*Overall, learning data structures and algorithms is an investment that pays off in your problem-solving abilities, career prospects, and overall growth as a programmer or computer scientist. It forms the backbone of your technical skills, allowing you to tackle a wide range of challenges in the world of computing.*