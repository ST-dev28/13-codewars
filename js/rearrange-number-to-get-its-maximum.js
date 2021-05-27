/*
Create a function that takes one positive three digit integer and
rearranges its digits to get the maximum possible number. Assume that
the argument is an integer. Return null (nil for Ruby, nothing for Julia)
if the argument is not valid.
maxRedigit(123); // returns 321
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
console.log(maxRedigit(0), '->', null, "0 => null");
