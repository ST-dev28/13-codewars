/*
Write a function to get the first elements of 
asequence. Passing a parameter n (default=1) 
will return the first n elements of the sequence.
If n == 0 return an empty sequence []
*/


function first(arr, n) {

    return arr.slice(0, n);

}


var arr = ['a', 'b', 'c', 'd', 'e']
console.log(first(arr), '-->'['a']);
console.log(first(arr, 2), '-->'['a', 'b']);


