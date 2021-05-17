/*
To complete this Kata you need to make a function multiplyAll/multiply_all 
which takes an array of integers as an argument. This function must return 
another function, which takes a single integer as an argument and returns 
a new array.
    The returned array should consist of each of the elements from the first 
array multiplied by the integer.
    Example:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.
*/

// NOT COMPLETED  !!!!!!!!!!!!!!!!



console.log(Array.isArray(multiplyAll([1])(1)));
console.log(multiplyAll([1, 2])(1).length === 2, '->', "array should have the same length as the array passed in as an argument");
console.log(multiplyAll([1, 2, 3])(1), '->', [1, 2, 3]);
console.log(multiplyAll([1, 2, 3])(2), '->', [2, 4, 6]);
console.log(multiplyAll([1, 2, 3])(0), '->', [0, 0, 0]);
console.log(multiplyAll([])(10), '->', [], "should return an empty array");