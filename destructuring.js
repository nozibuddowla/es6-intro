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

console.log(brand);

const numbers = [25, 88, 89, 101]
const [first, second] = numbers
console.log(first);

const [math, physics] = [90, 99];
console.log(physics)