/*
Complete the method that takes a boolean value and return a "Yes" string 
for true, or a "No" string for false.
*/

function boolToWord( bool ){
    if (bool === true) return 'Yes';
    return 'No';          
  }

 // ARBA trumpiau      const boolToWord = bool => bool === true ? 'Yes' : 'No';

console.log(boolToWord(true), '->', 'Yes');
console.log(boolToWord(false), '->', 'No');