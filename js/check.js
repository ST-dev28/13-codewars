/*You will be given an array a and a value x. All you need to do is check whether 
the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
*/

function check(a, x) {
   
    for (let i = 0; i < a.length; i++) {                               
        const skaicius = a[i]; 
        
        if (skaicius === x) {
            return true;
        }               
    }                                         
    return false;                                          
}
 
console.log(check([66, 101], 66), '->', true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), '->', true);
console.log(check(['t', 'e', 's', 't'], 'e'), '->', true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), '->', false);
