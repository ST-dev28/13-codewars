/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let vowelCount = 0;
    const vowelList = ['a', 'e', 'i', 'o', 'u'];
     for (let letter of str) {
         if (vowelList.includes(letter)) {
             vowelCount++;          
         }     
    }
    return vowelCount;
  }


console.log(getCount("abracadabra"), '->', 5);
console.log(getCount("bepasikopusteliaudamasis"), '->', 12);
console.log(getCount("aerodromas"), '->', 5);
console.log(getCount("wrthgbfd"), '->', 0);