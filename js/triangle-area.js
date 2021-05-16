/*
Calculate area of given triangle. Create a function t_area that will take
a string which will represent triangle, find area of the triangle, one 
space will be equal to one length unit. The smallest triangle will have 
one length unit.
Hints
Ignore dots.
Example:
.
.      .  
.      .       .      ---> should return 2.0

.
.      .  
.      .       .     
.      .       .      .      ---> should return 4.5
*/

function tArea(tStr) {
    const newStr  = tStr.split('\n');
    const ilgis = newStr.length -3;
    return area = ilgis **2 / 2;
  }

  /* ARBA
  function tArea(tStr) {
  let arr = tStr.trim().split('\n');
  return (arr.length - 1) ** 2 / 2;
}
  */


console.log(tArea('\n.\n. .\n'), '->', 0.5);  
console.log(tArea('\n.\n. .\n. . .\n'), '->', 2);   
console.log(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'), '->', 32);      
console.log(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n'), '->', 8);