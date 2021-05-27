/*
This is the first step to understanding FizzBuzz.
Your inputs: a positive integer, n, greater than or equal 
to one. n is provided, you have NO CONTROL over its value.
Your expected output is an array of positive integers from 
1 to n (inclusive).
Your job is to write an algorithm that gets you from the 
input to the output.


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

var maxRedigit = function (n) {
    let strNum = n.toString();

    if (n > 0) {
        var n = n.toString().split('');
        var descendingNumber = n.sort((a, b) => b - a).join('');
        return descendingNumber;
    }
    if (n <= 0) return null;
}
*/

var maxRedigit = function (n) {
    let convertN = n.toString();
    let newArray = convertN.split('');
    let sortArray = newArray.sort();
    let reversedArray = sortArray.reverse();
    let joinArray = reversedArray.join('');
    let stackedNumber = Number(joinArray);
    if (n <= 0 || convertN.length > 3 || convertN.length <= 2) return null;
    return stackedNumber;
}


console.log(maxRedigit(123), '->', 321, "123 => 321");
console.log(maxRedigit(-1), '->', null, "-1 => null");
console.log(maxRedigit(0001), '->', null, "0001 => null");
console.log(maxRedigit(-98), '->', null, "-98 => null");
console.log(maxRedigit(9598), '->', null, "9598 => null");
console.log(maxRedigit(0), '->', null, "0 => null");
console.log(maxRedigit(99), '->', null, "99 => null");
console.log(maxRedigit(82), '->', null, "82 => null");
console.log(maxRedigit(28), '->', 82, "28 => 82");
