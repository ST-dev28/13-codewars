/*
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
E.g.
arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
*/

function arrayMadness(a, b) {
    let sumKvad = 0;
    let sumKub = 0;

    for (let i = 0; i < a.length; i++) {
        const skaicius = a[i];                        // sumKvad += a[i] ** 2
        sumKvad += skaicius * skaicius;               //arba -> skaicius ** 2

    }
    for (let i = 0; i < b.length; i++) {
        const skaicius = b[i];                         // sumKvad += a[i] *** 3
        sumKub += skaicius * skaicius * skaicius;      //arba -> skaicius *** 3

        }
        if (sumKvad > sumKub) {
            return true; 
        } 
        return false; 
}




console.log(arrayMadness([4,5,6],[1,2,3]), '->',  true);
console.log(arrayMadness([5,6,7],[4,5,6]), '->',   false);
console.log(arrayMadness([4,5,6],[3,4,5]), '->',   false);
console.log(arrayMadness([3,4,5],[2,3,4]), '->',   false);
console.log(arrayMadness([2,3,4],[1,2,3]), '->',   false);
console.log(arrayMadness([1,2,3],[0,1,2]), '->',   true);
console.log(arrayMadness([5,3,2,4,1],[15]), '->',   false);
console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), '->',   false);
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), '->',   false);
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), '->',   true);
console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), '->',   false);


//reikia kintamojo, kur kaupsime kvadratu sumas
//reikia kintamojo, kur kaupsime kubu sumas

// ename per pirma sarasa
    // pasiimame skaiciu
    // prisumuojame skaiciaus kuba

//    einame antra sarasa
    // pasiimame skaiciu
    // prisumuojame skaiciaus kuba

// jei kvadratu suma didesne uz kubu suma
    //graziname true
// jei ne
    // graziname false