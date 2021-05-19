// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}

/* ARBA
function removeExclamationMarks(s) {
  return s.split('!').join('');
}
*/

console.log(removeExclamationMarks("Hello World!"), '->', "Hello World");
