/*
Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    if (weight / (height * height) <= 18.5) return "Underweight";
    if (weight / (height * height) <= 25) return "Normal";
    if (weight / (height * height) <= 30) return "Overweight";
    if (weight / (height * height) > 30) return "Obese";      
  }

/*  ARBA
function bmi(weight, height) {
  const $ = weight / height**2;
  return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
}

----ARBA
const bmi = (weight, height) => {

 let x = (weight / (height * height))
 
 return x <= 18.5 ? "Underweight"
      : x <= 25.0 ? "Normal"
      : x <= 30.0 ? "Overweight"
      : x > 30   && "Obese"
}
*/

console.log(bmi(80, 1.80), '->', "Normal");
  
