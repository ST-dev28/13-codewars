/*
Create a function that takes 2 positive integers in form of a 
string as an input, and outputs the sum (also as a string):
    Example: (Input1, Input2 -->Output)
    "4",  "5" --> "9"
    "34", "5" --> "39"
Notes:
If either input is an empty string, consider it as zero.
*/

function sumStr(a, b) {
    return (Number(a) + Number(b)).toString(); 
}

 /* ARBA trumpiau
    function sumStr(a, b) {
    return (+a + +b).toString();   // + prie simboli transformuoja i skaiciu
}

------ARBA pilnai
function sumStr(a,b) {
  const num1 = Number(a);
  const num2 = Number(b);
  return String(num1 + num2)
}
 */

console.log(sumStr("4","5"), "9");
console.log(sumStr("34","5"), "39")