/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let bendraSuma = 0;
    for (let i = 0; i < arr.length; i++) {                               
        const skaicius = arr[i];     
            if (skaicius > 0) {
            bendraSuma =bendraSuma + skaicius;   // arba ->bendraSuma += skaicius
        }               
    }                                         
    return bendraSuma;                         
}



console.log(positiveSum([1,2,3,4,5]), '->', 15);
console.log(positiveSum([1,-2,3,4,5]), '->', 13);
console.log(positiveSum([]), '->', 0);
console.log(positiveSum([-1,-2,-3,-4,-5]), '->', 0);
console.log(positiveSum([-1,2,3,4,-5]), '->', 9);


// pagal nutulejima is pradziu bendra suma = 0

    // einam per skaiciu sarasa
        // pasiimu skaiciu
            //jei jis yra teigiamas
                //pridedu prie bendros sumos

    // graziname bendros sumos rezultata
