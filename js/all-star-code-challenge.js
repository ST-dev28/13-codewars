/*
Create a function that accepts 2 string arguments and returns an integer 
of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.

Example (Inputs --> Output)
"Hello", 'o' => 1
"Hello", 'l' => 2
"", 'z'      => 0

Notes:
The first argument can be an empty string
The second string argument will always be of length 1
*/

function strCount(str, letter) {  
    let kiekis = 0;
    
    for (let i = 0; i < str.length; i++) {
        const raide = str[i];                    
   
        if (raide === letter) {
            kiekis++;                           
        }
    }  
    return kiekis;  
}


console.log(strCount('Hello', 'o'), '->', 1);
console.log(strCount('Hello', 'l'), '->', 2);
console.log(strCount('', 'z'), '->', 0);
console.log(strCount('aaa', 'z'), '->', 0);

// reikia kaupiamojo kintamojo

// einam per teksta
    // paimame raide

    // jeigu raide yra ta, kurios ieskau
            // kaupiamasis +1

// grazinam kaupiamaji


// pasitikrinimui -> console.log(letter);
// ++  -> reiskia padidinam vienu vienetu