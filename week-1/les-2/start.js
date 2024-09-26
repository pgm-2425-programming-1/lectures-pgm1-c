// Dit is commentaar
console.log("Hallo");
console.log("Dit is een tweede comment");

let name = "Mauro"; //Variabele aanmaken (const of let)
name = "Eros"; //String

console.log("Hallo " + name);
console.log("Hoe gaat het " + name + " ?");

const age = 21; //number
const isHuman = true; //boolean 

console.log("Meneer " + name + " is " + age + " jaar oud");
console.log(`Meneer ${name} is
     ${age} jaar oud`); //Template literal


let name2;
console.log(name2); //UNDEFINED! 
name2 = "Stefaan"; //string
console.log(name2);

let day = 26; //number

console.log("Vandaag is het " + day + " september");
const tomorrow = day + 1;
// day = day + 1; 
// day += 1;
console.log("Morgen is het " + tomorrow + " september");

const yesterday = day - 1;
// day = day - 1;
// day -= 1;
console.log("Gisteren was het " + yesterday + " september");


//kebab-case
// const the-day-tomorrow = day + 1;
//snake_case
const the_day_tomorrow = day + 1;
//PascalCase
const TheDayTomorrow = day + 1;
//camelCase -> Wij gebruiken dit!
const theDayTomorrow = day + 1; 


