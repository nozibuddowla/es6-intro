const numbers = [87, 118, 5, 91, 1121, 56, 94, 112, 514, 23, 2242]
// console.log(numbers);

// console.log(...numbers);

// const max = Math.max(1121, 56, 94, 112, 514, 23, 2242);
const max = Math.max(...numbers);
// console.log(max);

// const first = [1, 2, 3, 4, 5];
// const second = first
// second.push(6);
// console.log(first)

const first = [1, 2, 3, 4, 5];
const second = [...first]
const third = [0, ...first, 97, 45, 12]
second.push(6);
// console.log(first);
// console.log(second);
// console.log(third);

const ages = [45, 459, 1]
const prices = [98, 65, 45]
const all = [...ages, 5555, ...prices];
// console.log(all);


const person = { name: 'Parmisan', age: 25 }
const employee = { designation: 'dev', ...person }
// console.log(employee)

const total = (a, b, c) => a + b + c;

const result = total(45, 65, 21)
// console.log(result);

const digits = [78, 55, 66]
const result2 = total(...digits)
// console.log(result2);


/*
👉 Copy this array into a new array and add one extra number at the end.
const arr = [1, 2, 3];
// Example Output: [1, 2, 3, 4]
*/ 
const arr = [1, 2, 3];
// const newArr = [...arr, 4];

// console.log(newArr);


/* 
👉 Given: 
const arr1 = [1, 2];
const arr2 = [3, 4];
Use the spread operator to make a new array: [1, 2, 3, 4]
*/
const arr1 = [1, 2];
const arr2 = [3, 4];
const newArr = [...arr1, ...arr2];
// console.log(newArr);


/*
👉 Copy this object into a new object and add a new property country: "Bangladesh".
const user = { name: "Nozib" };
// Example Output: { name: "Nozib", country: "Bangladesh" }
*/ 
const user = { name: "Nozib" };
const userInfo = {...user, country: "Bangladesh" };
// console.log(userInfo);


/*
👉 You have:
const student = { name: "Nozib", grade: “A” }; 
Make a new object that has all the properties of a student and also adds the subject: “Math”.
*/
const student = { name: "Nozib", grade: "A" }; 
const studentInfo = {...student, subject: "Math"};
// console.log(studentInfo);


/*
👉 You have two arrays:
const fruits = [“apple”, “banana”];
const arr2 = [“orange”, “mango”];
Combine them into a single array without using .concat().
*/
const fruits = ["apple", "banana"];
const arr3 = ["orange", "mango"];
const arr4 = [...fruits, ...arr3];
console.log(arr4);


/*
👉 Create a new object that combines person info and job info.
const person = { name: "Nozib", age: 28 };
const job = { role: "Developer", company: "NexKraft" };
// Expected Output: { name: "Nozib", age: 28, role: "Developer", company: "NexKraft" }
*/ 
