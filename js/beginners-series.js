/*
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.
Example:
h = 0
m = 1
s = 1
result = 61000

Input constraints:
0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

1s = 1000ms
*/

function past(h, m, s) {
  
  const val = 60; 
  const min = 60; 
  const msek = 1000; 
  
  suma = (h * val * min * msek) + (m * min * msek) + (s * msek);
   
  return suma;
}
    
                                     
  

console.log(past(0,1,1), '->', 61000);
console.log(past(1,1,1), '->', 3661000);
console.log(past(0,0,0), '->', 0);
console.log(past(1,0,1), '->', 3601000);
console.log(past(1,0,0), '->', 3600000);