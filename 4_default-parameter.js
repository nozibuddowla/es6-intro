/*
 * some thumb rule of default value. may be useful
 * 
 * add, subtract --> 0
 * 
 * multiply --> 1
 * 
 * string --> ''
 * 
 * array = []
 * 
 * object = {}
*/

function sum(num1 = 0, num2 = 0) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}

// sum(10, 40)
// sum(10); // NaN --> Not a Number

function multiply(num1 = 1, num2 = 1) {
    const result = num1 * num2;
    console.log(result)
}
// multiply()
// multiply(10, 10);
// multiply(10);

function fullName(first, last = '') {
    const name = first + '' + last;
    console.log(name)
}

// fullName('Kamruzzaman Uzzal');


/*
👉 Write a function greet that takes a name and prints "Hello, <name>". If no name is given, it should print "Hello, Guest".
greet("Nozib"); // "Hello, Nozib"
greet();        // "Hello, Guest"
*/ 
let greet = (username = "Guest") => console.log(`Hello, ${username}`);

// greet("Nozib");
// greet();


/*
👉 Create a function calculatePrice that takes price and tax (default = 0.1) and returns the total price including tax. 
Test it with and without passing the tax argument. 
*/ 
let calculatePrice = (price, tax = 0.1) => (price + (price * tax)).toFixed(2);

console.log(calculatePrice(100, 0.08));
console.log(calculatePrice(100));
