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
    let convertedString = ''; 
    for (let i = 0; i < string.length; i++) {
        const raide = string[i];

        switch (raide) {
            case 'ą':
                convertedString += 'a';
                break;
            case 'ć':
                convertedString += 'c';
                break;
            case 'ę':
                convertedString += 'e';
                break;
            case 'ł':
                convertedString += 'l';
                break;
            case 'ń':
                convertedString += 'n';
                break;
            case 'ó':
                convertedString += 'o';
                break;
            case 'ś':
                convertedString += 's';
                break;
            case 'ź':
                convertedString += 'z';
                break;
            case 'ż':
                convertedString += 'z';
                break;

            default: 
            convertedString += raide; 
            break; 
        }
    }    
    return convertedString; 
  }


console.log(correctPolishLetters("Jędrzej Błądziński"), '->', "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), '->',"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), '->',"Maria Sklodowska-Curie");

// einame per raides
    //paimu raide
    // jeigu raide yra ne lenkiska
        //tiesiog idedame prie convertedString
    // jei ji lenkiska
        // pridedame prie convertedString atitinkama lotyniska tos raides versija

        