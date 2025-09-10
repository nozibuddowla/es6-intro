// function declaration
function add(num1, num2) {
    return num1 + num2;
}

// function expression
const addition = function (num1, num2) {
    return num1 + num2
}

// const result = addition(17, 13);
// console.log(result);

// arrow function
const add2 = (num1, num2) => num1 + num2;

// const result = add2(17, 13);
// console.log(result);

// const multiply = (a, b) => a * b;

// const mult = multiply(5, 7);
// console.log(mult);

const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

const isFirstBig = (x, y) => x > y;

// const isBig = isFirstBig(5, 12);
// console.log(isBig)

// multi line arrow function 
const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y * 2;
    const result = makeDouble + againDouble;
    return result
}


/*
👉 Write an arrow function that takes a number and returns that number doubled.
Example: double(5) → 10
*/
const double = x => x * 2;
// console.log(double(5));


/*
👉 Write an arrow function called sayHello that prints:
👉 “Hello, World!”
*/
const sayHello = greet => greet;
// console.log(sayHello("Hello, World!"));


/*
👉 Write an arrow function with no parameters that always returns the string "Hello World".
// Example: greet() → "Hello World"
*/ 
const greet = () => "Hello, World";
// console.log(greet());


/*
👉 Convert this normal function into an arrow function:
function multiply(a, b) {
  return a * b;
}
// Expected Output: 20 (when called with 4, 5)
*/ 
const multiply = (a, b) => a * b;
// console.log(multiply(4, 5));


/*
👉 Write a function that takes an array of numbers and returns a new array with each number doubled, using an arrow function. 
*/ 

let doubled = numbers => {
    let result = [];
    for (let index = 0; index < numbers.length; index++) {
        let double = numbers[index] * 2;
        result.push(double);
    }
    return result;
}
// let numbers = [5, 2, 9, 4];
// console.log(doubled(numbers));


/*
👉 Use an arrow function with .map() to square each number in the array.
const numbers = [2, 4, 6, 8];
// Expected Output: [4, 16, 36, 64]
*/ 

const numbers = [2, 4, 6, 8];
let square = numbers.map(number => number * number);
console.log(square);
