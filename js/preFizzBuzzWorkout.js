/*
This is the first step to understanding FizzBuzz.
Your inputs: a positive integer, n, greater than or equal 
to one. n is provided, you have NO CONTROL over its value.
Your expected output is an array of positive integers from 
1 to n (inclusive).
Your job is to write an algorithm that gets you from the 
input to the output.
*/
/*
function preFizz(n) {
    if (n === 0) return [];
    if (n >= 1)
        return Array.from(Array(n + 1).keys()).slice(1);
}



console.log(preFizz(0), '->', [], `Array should be from 1 to 0`);
console.log(preFizz(1), '->', [1], `Array should be from 1 to 1`);
console.log(preFizz(2), '->', [1, 2], `Array should be from 1 to 2`);
console.log(preFizz(3), '->', [1, 2, 3], `Array should be from 1 to 3`);
console.log(preFizz(4), '->', [1, 2, 3, 4], `Array should be from 1 to 4`);
console.log(preFizz(5), '->', [1, 2, 3, 4, 5], `Array should be from 1 to 5`);
*/
/*
Complete the function that takes a non-negative integer n as input, 
and returns a list of all the powers of 2 with the exponent ranging 
from 0 to n (inclusive).
*/
/*
function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++)
        arr.push(i);
    let mapArr = arr.map(function (number) {
        return Math.pow(2, number);
    });
    return mapArr;
}
*/
function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(2 ** i);
    }
    return arr;
}

console.log(powersOfTwo(0), '->', [1])
console.log(powersOfTwo(1), '->', [1, 2])
console.log(powersOfTwo(4), '->', [1, 2, 4, 8, 16])