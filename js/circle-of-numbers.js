/*
Consider integer numbers from 0 to n - 1 written down along the circle 
in such a way that the distance between any two neighbouring numbers is 
(note that 0 and n - 1 are neighbouring, too).
    Given n and firstNumber/first_number, find the number which is written 
in the radially opposite position to firstNumber.
    Example
For n = 10 and firstNumber = 2, the output should be
circleOfNumbers(n, firstNumber) === 7
Input/Output
[input] integer n
A positive even integer.
Constraints: 4 ≤ n ≤ 1000.
[input] integer firstNumber/first_number
Constraints: 0 ≤ firstNumber ≤ n - 1
[output] an integer
*/

function circleOfNumbers(n, firstNumber) {
   return  (firstNumber + n / 2) % n; 
    
}
  

console.log(circleOfNumbers(10,2) , '->', 7);
console.log(circleOfNumbers(10,7) , '->', 2);
console.log(circleOfNumbers(4,1) , '->', 3);
console.log(circleOfNumbers(6,3) , '->', 0);