# Asymptotic Analysis

## Big-Oh/Big-O (O) Notation

**Big O notation is used to describe the performance or complexity of an algorithm in terms of its input size. It provides an upper bound on the growth rate of an algorithm's time or space requirements.**

In simple terms, Big O notation tells you how the runtime or memory usage of an algorithm increases as the input size grows.

*Here's an easy example to illustrate the concept:*

```javascript

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

```

### Explanation

- In this example, we have a function called sum that takes an array of numbers as input and returns their sum.

- To analyze the time complexity of this function using Big O notation, we consider the worst-case scenario, which is when the array has n elements.

- In this case, the function iterates over each element in the array once using a for loop. Therefore, the runtime of the function is directly proportional to the number of elements in the input array, n.

- Using Big O notation, we can express the time complexity of this function as O(n), which reads as "order of n" or "linear time complexity." It indicates that the runtime of the function grows linearly with the input size.

*In simpler terms, it means that if we double the number of elements in the array, the time it takes to run the function will also roughly double.*

**It's important to note that Big O notation focuses on the dominant factor that affects the algorithm's performance as the input size grows. It abstracts away constant factors, lower-order terms, and specific details of the algorithm.**

**Big O notation provides a standardized way to compare the efficiency of different algorithms. It helps in making informed decisions when choosing the most appropriate algorithm for a given problem based on its scalability.**

`[Representation of Big-O (O)](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F09923922-2afe-44ae-a5b9-b670155de722%2Fs_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio17_(1).png?table=block&id=09f3d842-238d-4fa6-95c1-7bcd79fec530&cache=v2)` 



## Big Omega (Ω) Notation

**Big Omega notation, represented by Ω (omega), is used to describe the best-case scenario or lower bound of the runtime complexity of an algorithm. It provides a lower bound on the growth rate of an algorithm's time or space requirements.**

In simple terms, Big Omega notation tells you the minimum amount of time an algorithm will take to run for a given input size.

*Here's an easy example to illustrate the concept:*

```javascript

function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

```

### **Explanation**

- In this example, we have a function called findMin that takes an array of numbers as input and returns the smallest number in the array.

- To analyze the time complexity of this function using Big Omega notation, we consider the best-case scenario, which is when the smallest number is at the beginning of the array.

- Big omega (Ω) focuses on the lower bound, meaning the guaranteed minimum amount of work required by the algorithm.

- In the findMin function, the loop iterates through the array, comparing each element with the current minimum (min).

- Even if the minimum element is at position 1, the loop still needs to iterate at least n-1 times.



**Similar to Big O notation, Big Omega notation abstracts away constant factors and lower-order terms. It focuses on the best-case performance of an algorithm and provides a lower bound on its runtime complexity.**

**Big Omega notation helps in understanding the minimum amount of time an algorithm will take to run, which can be useful in scenarios where the best-case performance is critical for optimizing certain applications or algorithms.**



## Big Theta (Θ) Notation

**Big Theta notation, represented by Θ (theta), is used to describe the average-case or tight bound of the runtime complexity of an algorithm. It provides both the lower and upper bounds on the growth rate of an algorithm's time or space requirements.**

In simple terms, Big Theta notation tells you both the best-case and worst-case scenarios of an algorithm and gives a tight estimate of its runtime complexity.

*Here's an easy example to illustrate the concept:*

```javascript

function containsValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

```

*In this example, we have a function called containsValue that takes an array arr and a value to search for, and it returns true if the value is found in the array, or false otherwise.*



### **To analyze the time complexity of this function using Big Theta notation, we consider both the best-case and worst-case scenarios.**

- **Best-case scenario:** The value is found at the beginning of the array. In this case, the function only needs to compare the first element with the target value, resulting in a constant-time operation. The best-case time complexity is Θ(1).
      
- **Worst-case scenario:** The value is not present in the array, or it is located at the end of the array. In this case, the function needs to compare the target value with every element in the array until the end, resulting in a linear-time operation. The worst-case time complexity is Θ(n), where n represents the number of elements in the array.



**In simpler terms, it means that as the input size increases, the time it takes to run the function will increase proportionally on average. However, there will be cases where the runtime can be better (best-case scenario) or worse (worst-case scenario) than the average.**


Big Theta notation helps in providing a tighter estimate of an algorithm's performance by considering both the lower and upper bounds. It gives a more comprehensive understanding of how an algorithm behaves under different input scenarios.




## Comparison Table

**A table that summarizes the differences between Big-O, Omega, and Theta notations:**

| **Notation** | **Definition** | **Purpose** | **Upper/Lower Bound** |
|--------------|----------------|-------------|-----------------------|
| **Big-O (O)** | Describes the upper bound of the time complexity. | Used to characterize an algorithm's worst-case runtime. | Upper bound. |
| **Big-Omega (Ω)** | Describes the lower bound of the time complexity. | Used to characterize an algorithm's best-case runtime. | Lower bound. |
| **Big-Theta (Θ)** | Describes both the upper and lower bounds of the time complexity. | Used to characterize an algorithm's average-case or tight runtime. | Both upper and lower bounds. |

**Key Points:**

- **Big-O Notation** (O): Gives an upper limit on the time an algorithm can take, ensuring it does not exceed this time. Useful for worst-case analysis.
- **Big-Omega Notation** (Ω): Provides a lower limit on the time an algorithm will take, ensuring it takes at least this much time. Useful for best-case analysis.
- **Big-Theta Notation** (Θ): Provides an exact asymptotic behavior of an algorithm, ensuring the time complexity is tightly bound between two constants. Useful for average-case analysis.

This table helps in understanding the different scenarios and bounds where each notation is applicable.




### Representation of Big-O, Big-Omega, and Big-Theta in JavaScript:


```javascript

// Big-O Notation (O)
function bigO(f, g, c, n0) {
  for (let n = n0; n < Infinity; n++) {
    if (f(n) > c * g(n)) {
      return false;
    }
  }
  return true;
}

// Big-Omega Notation (Ω)
function bigOmega(f, g, c, n0) {
  for (let n = n0; n < Infinity; n++) {
    if (f(n) < c * g(n)) {
      return false;
    }
  }
  return true;
}

// Big-Theta Notation (Θ)
function bigTheta(f, g, c1, c2, n0) {
  for (let n = n0; n < Infinity; n++) {
    if (f(n) < c1 * g(n) || f(n) > c2 * g(n)) {
      return false;
    }
  }
  return true;
}

// Example functions and constants
const f = n => n * n;
const g = n => n;
const c = 2;
const c1 = 1;
const c2 = 3;
const n0 = 1;

console.log("Big-O:", bigO(f, g, c, n0)); // Example output: false
console.log("Big-Omega:", bigOmega(f, g, c, n0)); // Example output: true
console.log("Big-Theta:", bigTheta(f, g, c1, c2, n0)); // Example output: true


```

**Explanation:**

- `bigO(f, g, c, n0)`: Checks if function `f(n)` is upper bounded by `c * g(n)` for all `n >= n0`.
- `bigOmega(f, g, c, n0)`: Checks if function `f(n)` is lower bounded by `c * g(n)` for all `n >= n0`.
- `bigTheta(f, g, c1, c2, n0)`: Checks if function `f(n)` is tightly bounded between `c1 * g(n)` and `c2 * g(n)` for all `n >= n0`.

In the example, the functions `f(n)` and `g(n)` are defined along with constants `c`, `c1`, `c2`, and `n0`. The console logs will output whether the conditions hold true for the given functions and constants.