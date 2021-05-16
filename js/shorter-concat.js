/*
Given 2 strings, a and b, return a string of the form: 
shorter+reverse(longer)+shorter.
In other words, the shortest string has to be put as prefix and as 
suffix of the reverse of the longest.
Strings a and b may be empty, but not null (In C# strings may also be null. 
Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b
*/

function shorter_reverse_longer(a, b) {

    if  (a.length < b.length) {
        return a + reverse(b) + a;   
      } else {

        return b + reverse(a) + b;
        }
    }
    const reverse = (str) => str.split("").reverse().join("");

/* ARBA
function shorter_reverse_longer(a,b){
  if (b.length > a.length)
    [a, b] = [b, a];
  return b + a.split('').reverse().join('') + b;
}
*/

console.log(shorter_reverse_longer("first", "abcde"), '->', "abcdetsrifabcde");
console.log(shorter_reverse_longer("hello", "bau"), '->', "bauollehbau");
console.log(shorter_reverse_longer("abcde", "fghi"), '->', "fghiedcbafghi");


/*
shorter (a or b) + longer reversed + ( a or b) + shorter (a or b)
- lengths compare
- reverse longer
- combine
*/