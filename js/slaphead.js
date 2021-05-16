/*
Being a bald man myself, I know the feeling of needing to keep it clean 
shaven. Nothing worse that a stray hair waving in the wind.
You will be given a string(x). Clean shaved head is shown as "-" and stray 
hairs are shown as "/". Your task is to check the head for stray hairs and 
get rid of them.
You should return the original string, but with any stray hairs removed. 
Keep count of them though, as there is a second element you need to return:
0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"
So for this head: "------/------" you shoud return:
["-------------", "Unicorn"]
*/

function bald(x) {
    const newStr = x.replace(/\//g, '');
    const currentStrlengt = x.length;
    const newStrLenght = newStr.length;
    
    if (currentStrlengt - newStrLenght > 5) 
        return  [x.replace(/\//g, '-'), 'Hobo!'];  
    if (currentStrlengt - newStrLenght === 2) 
        return [x.replace(/\//g, '-'), 'Homer!']
    if (currentStrlengt - newStrLenght === 1) 
        return [x.replace(/\//g, '-'), 'Unicorn!'];
    if (currentStrlengt - newStrLenght === 0) 
        return [x.replace(/\//g, '-'), 'Clean!'];
    if (currentStrlengt - newStrLenght <= 5) 
        return [x.replace(/\//g, '-'), 'Careless!'];
}

/* ARBA
    function bald(x) {
  const count = x.split('/').length - 1;
  let look;
  switch (count) {
    case 0: look = 'Clean'; break;
    case 1: look = 'Unicorn'; break;
    case 2: look = 'Homer'; break;
    case 3:
    case 4:
    case 5: look = 'Careless'; break;
    default: look = 'Hobo';
  }
  return [x.replace(/\//g, '-'), look + '!'];
}
}

-----ARBA
const bald = x =>
[`-`.repeat(x.length), `${[`Clean`, `Unicorn`, `Homer`, `Careless`, `Careless`, `Careless`][--x.split(`/`).length] || `Hobo`}!`];
*/

console.log(bald('/---------'), '->', ['----------', 'Unicorn!']);
console.log(bald('/-----/-'), '->', ['--------', 'Homer!']);
console.log(bald('--/--/---/-/---'), '->', ['---------------', 'Careless!']);