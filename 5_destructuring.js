// const product = {
//     name: "shirt", 
//     price: 5000,
//     quantity: 70
// };

const { price, quantity } = {
    name: "shirt", 
    price: 5000,
    quantity: 70
};

// console.log(price, quantity, tax = 7);

// const discount = product.price * 20/100;
// const yourPay = product.price - discount;
// const vatAmount = product.price*7/100;
// const totalAmount = yourPay + vatAmount;

// const price = product.price;

// const discount = price * 20/100;
// const yourPay = price - discount;
// const vatAmount = price * 7/100;
// const totalAmount = yourPay + vatAmount;


const discount = price * 20/100;
const yourPay = price - discount;
const vatAmount = price * 7/100;
const totalAmount = yourPay + vatAmount;

const device = { name: 'phone', brand: 'samsung', price: 34000 }
const { brand } = device;

// console.log(brand);

// const numbers = [25, 88, 89, 101];
// const [first, second] = numbers;
// console.log(first);

const [math, physics] = [90, 99];
// console.log(physics);


/*
👉 Take the first and second numbers from this array and print them.
const numbers = [10, 20, 30];
// Example Output: 10 20
*/ 
const numbers = [10, 20, 30];
const [first, second] = numbers;
// console.log(10, 20);

/*
👉 Extract the name and age from this object and print them.
const person = { name: "Nozib", age: 28 };
// Example Output: Nozib 28
*/ 
// const person = { name: "Nozib", age: 28 };
// const {name, age} = person;
// console.log(name, age);

/*
👉 You have: 
const user = { username: "john_doe", email: john@example.com};
Use destructuring to get the username into a variable. 
*/ 
const user = { username: "john_doe", email: "john@example.com"};
let {username} = user;
// console.log(username);


/*
👉 Extract the first two colors into variables and log them.
const colors = ["red", "green", "blue", "yellow"];
// Expected Output: red green
*/ 
// const colors = ["red", "green", "blue", "yellow"];
// let [red, green] = colors;
// console.log(red, green);


/*
👉 Given the array:
const  colors =  ["red", "green", "blue", "yellow"];
Extract the first two colors into variables and put the rest into another array. 
*/
const  colors =  ["red", "green", "blue", "yellow"];
const [firstColor, secondColor, ...restColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(restColors);


/*
👉 Extract title and year from the book object.
const book = {
    title: "JavaScript Essentials",
    author: "Eich",
    year: 2015
};
// Expected Output: JavaScript Essentials 2015
*/ 

const book = {
    title: "JavaScript Essentials",
    author: "Eich",
    year: 2015
};
const {title, year} = book;
// console.log(title, year);

/* 
👉 You have: 
const person = { name: “Bob Basir”, age: 30, job: “Developer”, country: “India” };
Extract name and job into variables, and keep the rest in another object.
*/
const person = { name: "Bob Basir", age: 30, job: "Developer", country: "India" };
const {name, job, ...restObject} = person;
console.log(name);
console.log(job);
console.log(restObject);
