// 20% discount ===
// 20/100*100

const getTax = (amount, taxRate) => amount * taxRate / 100;
const add = (p, q) => p + q;

// single parameter
const getSquare = (x) => x * x;
// console.log(getSquare(8))

const getHalf = num => num / 2;
// console.log(getHalf(18))

const firstElement = nums => nums[0];
// console.log(firstElement([29, 65, 47]))

const logIt = () => console.log(78)
// console.log(logIt())

// anonymous function
// document.getElementById('').addEventListener('click', () =>{})
// document.getElementById('btn-click').addEventListener('click', event => {})

// const person = {
//     name: "Nozib",
//     sayName: function () {
//     	console.log(this.name); // "Nozib"
//     }
// };
// person.sayName();

const person = {
    name: "Nozib",
    sayName: () => {
        console.log(this.name); // undefined (not bound to object)
    }
};
person.sayName();
