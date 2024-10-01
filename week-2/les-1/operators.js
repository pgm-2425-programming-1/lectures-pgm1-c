/*Logical operators

&& (AND) -> Beide voorwaarden moeten true zijn 
|| (OR) -> 1 van de voorwaarden is true 
! (NOT) -> Omgekeerde waarde 

*/

/* AND Operator */

const age = 18; //number
const hasLicense = false; //boolean
// let x; //UNDEFINED

if(age >= 18 && hasLicense === true){ //(hasLicense is hetzelfde als hasLicense === true)
    console.log("Je mag autorijden");
} else{
    console.log("Je mag niet rijden");
}

/* OR Operator */
const hasCoat = true;
const hasUmbrella = false;

if( hasCoat || hasUmbrella){
    console.log("Je bent klaar voor het belgisch weer! :)")
} else{
    console.log("Prepare to be wet!");
}

/* NOT Operator */
const hasPassed = true;

if(!hasPassed){
    console.log("Je bent niet geslaagd")
} else{
    console.log("Je bent geslaagd");
}

// Mixed Operators
const age2 = 18; //number
const hasLicense2 = false; //boolean
const hasCar2 = true;

if((age2 >= 18 && hasLicense2 === true) || hasCar2){
    console.log("Je mag autorijden");
} else{
    console.log("Je mag niet rijden");
}


/* 
Uitleg 2x '=' vs 3x '='
als we == plaatsen dan zou een number of andere types gelijk kunnen zijn (onvoorspelbaar gedrag)
als we === plaatsen dan checkt javascript ook het data type zodat we zeker zijn (gebruik dit!)
*/

if(3 == "3"){
    console.log("number gelijk aan string");
} else{
    console.log("number is niet gelijk aan string");
}

if(4 === "4"){
    console.log("number gelijk aan string");
} else{
    console.log("number is niet gelijk aan string");
}