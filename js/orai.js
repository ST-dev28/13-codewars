/*
Gaunamas savaites krituliu kiekis milimetrais.
Jei visa savaite visiskai nelijo, graziname: "Sausra";
Jei krituliu ne daugiau nei 50mm, tai: "Ganetinai sausa savaite";
Jei krituliu kiekis ne daugiau 200mm, tai: "Lietinga savaite"
Jei krituliu virs 1000mm, tai: "Barsukas turetu sedeti namie"
Visais kitais atvejais: "Labai daug lietaus"
*/

const a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const b = [0, 0, 10, 5, 7, 0, 0];
const c = [50, 0, 10, 5, 7, 40, 15];
const d = [100, 200, 300, 400, 500, 600, 700];
const e = [100, 100, 100, 100, 100, 100, 100];

const xa = 0;  //    tikrinimui const xa = weather(a); 
const xb = 0;
const xc = 0;
const xd = 0;
const xe = 0;

function weather(krituliai) {
    let krituliuKiekis = 0;
    for (let i = 0; i < krituliai.length; i++) {
            // tikrinimui console.log(i)  tada 16 eilute
        krituliuKiekis += krituliai[i];
            // tiktinimui console.log(krituliuKiekis); 
     
    } if (krituliuKiekis === 0) {
        return 'Sausra';
    } else if (krituliuKiekis <= 50) {
        return 'Ganetinai sausa savaite'
    } else if (krituliuKiekis <= 200) {
        return 'Lietinga savaite';
    } else if (krituliuKiekis > 1000) {
        return 'Barsukas turetu sedeti namie';
    } else {
        return 'Labai daug lietaus';
        
    }
}

console.log(weather(a));
console.log(weather(b));
console.log(weather(c));
console.log(weather(d));
console.log(weather(e));



