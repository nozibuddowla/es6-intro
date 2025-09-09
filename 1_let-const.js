// es6
// console.log(name);
// console.log( 'device value', device)
// var device = 'laptop';

const name = 'Bangladesh';
const countryName = "BD" + name;
// console.log(countryName);
let price = 120;
price = 150;
// console.log(price);

const charge = 50;
// charge = 45;

const dress = ['shirt', 'pant', 'jacket'];
dress.push('muffler')
// console.log(dress);

const student = {name: 'Jaglul Gaffer Khan', marks: 50};
student.marks = 60;
// console.log(student);


/*
👉 Create a variable with let for your age and a constant with const for your country. Then print them.
Example Output:
My age is 28 and my country is Bangladesh.
*/ 

// let age = 28;
// const country = "Bangladesh";

// let result = `My age is ${age} and my country is ${country}.`;
// console.log(result);


/*
👉 Create a variable age with let and assign it 20. 
Then change it to 21.
Also, create a const variable country with the value “Bangladesh”. Try to change it. 
*/
let age = 20;
age = 21;
const country = "Bangladesh";
// country = "f society"; // TypeError: Assignment to constant variable.
// console.log(age, country);


/*
👉 Fix the variable declarations so the code doesn’t throw errors and outputs correctly.

// Expected Output:
// Apple
// Banana
// Cherry

___ fruit1 = "Apple";
___ fruit2 = "Banana";
___ fruit3 = "Cherry";

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

*/ 
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Cherry";

// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);


/*
👉 Create a loop that prints numbers from 1 to 5 with a 1-second delay between each number using setTimeout. 
👉 Hint: Think about why let works here, but var causes issues. 
*/ 


for (let index = 1; index < 6; index++) {
    setTimeout(() => {
        console.log(index);
    }, 1000 * index);
}
