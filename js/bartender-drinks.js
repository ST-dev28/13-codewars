/*
Complete the function that receives as input a string, and produces 
outputs according to the following table:
Input	                    Output
"Jabroni"	                "Patron Tequila"
"School Counselor"	        "Anything with Alcohol"
"Programmer"	            "Hipster Craft Beer"
"Bike Gang Member"	        "Moonshine"
"Politician"	            "Your tax dollars"
"Rapper"	                "Cristal"
anything else	            "Beer"

Note: anything else is the default case: if the input to the function is 
not any of the values in the table, then the return value should be "Beer".
Make sure you cover the cases where certain words do not show up with 
correct capitalization. For example, the input "pOLitiCIaN" should still 
return "Your tax dollars".
*/

function getDrinkByProfession(param){
	var paramText = param.toLowerCase();
	switch(paramText) {
		case "jabroni":
			return "Patron Tequila"
			break;
		case "school counselor":
			return "Anything with Alcohol"
			break;
		case "programmer":
			return "Hipster Craft Beer"
			break;
		case "bike gang member":
			return "Moonshine"
			break;
		case "politician":
			return "Your tax dollars"
			break;
		case "rapper":
			return "Cristal"
			break;
		default:
			if(paramText.length > 0) {
				return "Beer"
			}
		break;
	}     
}


// ARBA
function getDrinkByProfession(param) {
    param = param.toLowerCase();
    
    switch(param) {
      case "jabroni": return "Patron Tequila";
      case "school counselor": return "Anything with Alcohol";
      case "programmer": return "Hipster Craft Beer";
      case "bike gang member": return "Moonshine";
      case "politician": return "Your tax dollars";
      case "rapper": return "Cristal";
      default: return "Beer";
    }
  }


console.log(getDrinkByProfession("jabrOni"), '->', "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), '->', "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), '->', "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), '->', "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), '->', "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), '->', "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), '->', "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), '->', "Beer", "'Pug' should map to 'Beer'");


console.log('----------------');

/*
Code as fast as you can! You need to double the integer and return it.
*/

function doubleInteger(i) {
 
    return i * 2;
  }

  console.log(doubleInteger(2), '->', 4);