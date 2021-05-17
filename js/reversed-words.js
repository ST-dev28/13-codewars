/*
Complete the solution so that it reverses all of the words within the string passed in.
Example:
"The greatest victory is that which requires no battle" --> "battle no requires 
which that is victory greatest The"
*/

function reverseWords(str){
    const newStr = str.split(' ');
    return newStr.reverse().join(' ');
  }

  /* ARBA trumpiau
  function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

---ARBA
const reverseWords = (str) => str.split(" ").reverse().join(" ");
  */

console.log(reverseWords("hello world!"), '->', "world! hello");
console.log(reverseWords("yoda doesn't speak like this" ), '->',  "this like speak doesn't yoda");
console.log(reverseWords("foobar"                       ), '->',  "foobar");
console.log(reverseWords("kata editor"                  ), '->',  "editor kata");
console.log(reverseWords("row row row your boat"        ), '->',  "boat your row row row");