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

fullName('Kamruzzaman Uzzal');