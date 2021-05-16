/*
Imagine there's a big cube consisting of n3 n^3n small cubes. Calculate, how many small cubes 
are not visible from outside.
For example, if we have a cube which has 4 cubes in a row, then the function should return 8, 
because there are 8 cubes inside our cube (2 cubes in each dimension)
*/

function notVisibleCubes(n) {
    if (n <= 2) 
    return 0; 
    
  let x = n-2;
  return x*x*x;
  
}

console.log(notVisibleCubes(0), '->', 0);
console.log(notVisibleCubes(1), '->', 0);
console.log(notVisibleCubes(2), '->', 0);
console.log(notVisibleCubes(3), '->', 1);
console.log(notVisibleCubes(5), '->', 27);