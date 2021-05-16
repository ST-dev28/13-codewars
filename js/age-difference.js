/*
At the annual family gathering, the family likes to find the oldest 
living family member’s age and the youngest family member’s age and 
calculate the difference between them.
You will be given an array of all the family members' ages, in any order. 
The ages will be given in whole numbers, so a baby of 5 months, will have 
an ascribed ‘age’ of 0. 
Return a new array (a tuple in Python) with [youngest age, oldest age, 
difference between the youngest and oldest age].
*/


function differenceInAges(ages) {
    let difference = 0; 

    const min = Math.min(...ages);
    const max = Math.max(...ages);
    
    for (let i = min; i <= max; i++) {                               
        difference = max - min;                     
    }                                         
    return [min, max, difference];                                          
}

/* ARBA
function differenceInAges(ages) {
    let youngest = Infinity;  
    let oldest = 0;    // g.b. -Inginity, bet logiskai neigiamo amziaus nera

    for (let i = 0; i < ages.lengt; i++) {                               
        if (ages[i] < youngest) {
            youngest = ages[i];

        }   
        if (ages[i] > oldest) {
            oldest = ages[i];
        }
    }
    return [youngest, oldest, oldest-youngest]
}
*/

console.log(differenceInAges([82, 15, 6, 38, 35]), '->', [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), '->', [14, 99, 85]);

