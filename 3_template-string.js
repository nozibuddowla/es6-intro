// const poem = 'amm pata jora jora
// marbu chabuk chorbe ghora'

// const poem = 'aam pata jora jora \n'+
// 'marbu chabuk chorbe ghora\n'+
// 'ore khoka ghure dara';

const poem = `Aam pata jora jora
marbo chabuk chorbe ghora
ore babu ghure dara
asche amar pagla ghora`;

// console.log(poem);

function sum (num1, num2){
    const result = num1 + num2;
    // const output = 'sum of ' + num1 + ' and ' + num2 + ' is equal to ' + result;
    const output = `sum of ${num1} and ${num2} is equal to ${result}`
    // console.log(output);
}
sum(5,7);

const price = 500;
const discountedPrice = `Discounted Price of ${price} after 20% discounted price is ${price * 0.8}`
// console.log(discountedPrice);


/*
👉 Make a string with your name and favorite food using template literals.
// Example Output: "My name is Nozib and I like Biryani."
*/ 
let favoriteFood = "Biryani";
let myName = "Nozib";
let str = `My name is ${myName} and I like ${favoriteFood}`;
console.log(str);


/*
👉 Create two variables:
const name = “Alice”;
const city = “Dhaka”;
Use a template literal to print:
👉 “Alice lives in Dhaka.”
*/ 
const nameAl = "Alice";
const city = "Dhaka";
console.log(`${nameAl} lives in ${city}`);


/*
👉 Use template literals to rewrite this:
const name = "Nozib";
const country = "Bangladesh";
// Expected Output: "Hello, my name is Nozib and I live in Bangladesh."
*/
const nameNo = "Nozib";
const country = "Bangladesh";
console.log(`Hello, my name is ${nameNo} and I live in ${country}.`);


/*
👉 You have an object:
const user = { name: “Alice”, age: 25, city: “New York” };
Generate a string like: 
👉 ” Alice is 25 years old and lives in New York.”
Using a template literal. 
*/ 
const user = { name: "Alice", age: 25, city: "New York" };
console.log(`${user.name} is ${user["age"]} years old and lives in ${user.city}.`);

