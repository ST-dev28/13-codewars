/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
Your task is to change the letters with diacritics:
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:
"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

function correctPolishLetters (string) {
    const polish = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż']; 
    const latin = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];
    let convertedString = ''; 

    for (let i = 0; i < string.length; i++) {
        const raide = string[i];
        let convertedLetter = raide;

        for (let p = 0; p < polish.length; p++) {
            const polishLetter = polish[p];

            if (polishLetter === raide) {
                convertedLetter = latin[p];
            }   
        }
        convertedString += convertedLetter; 
    }    
    return convertedString; 
  }


console.log(correctPolishLetters("Jędrzej Błądziński"), '->', "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), '->',"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), '->',"Maria Sklodowska-Curie");

