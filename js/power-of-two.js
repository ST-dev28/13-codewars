/*
Complete the function that takes a non-negative integer n as input, 
and returns a list of all the powers of 2 with the exponent ranging 
from 0 to n (inclusive).
*/

function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(2 ** i);
    }
    return arr;
}

/*  ARBA
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


console.log(powersOfTwo(0), '->', [1])
console.log(powersOfTwo(1), '->', [1, 2])
console.log(powersOfTwo(4), '->', [1, 2, 4, 8, 16])