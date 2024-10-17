//Variabelen - Data types 
let priceApple = 1.2; //Number
const priceBanana = 0.5;
const priceOrange = 0.8;
const isFruit = true; //Boolean
const slogan = "Fruit is healthy!";

console.log("De prijs van een appel is " + priceApple);
console.log(`De prijs van een banaan is ${priceBanana}`);

priceApple = priceApple * 0.9;
// priceApple *= 0.9
console.log(priceApple);

//if-else (Logical Operators)
// 1. And = &&
// 2. OR = ||
// 3. NOT = !

const age = 23;

//Zonder logical operators -> Probleem: werk in omgekeerde volgorde dus oud naar jong
// if(age > 12){
//     console.log("Je bent een kind");
// } else if(age > 18){
//     console.log("Je bent een tiener");
// } else if(age > 22){
//     console.log("Je bent een jong volwassene");
// } else{
//     console.log("Boomer");
// }

if(age < 12){
    console.log("Je bent een kind");
} else if(age >= 12 && age < 18){
    console.log("Je bent een tiner");
} else if(age >= 18 && age < 65){
    console.log("Je bent een volwassene");
}
else{
    console.log("Je bent een senior.");
}

// ----------------------------

const trafficLight = "green";

if(trafficLight === "green"){
    console.log("het is groen licht");
} else if(trafficLight === "yellow"){
    console.log("Maak je klaar om te stoppen.")
} else if(trafficLight === "red"){
    console.log("Stop.")
} else{
    console.log("Er staat geen verkeerslicht");
}

// Switch

let action = "Attack";

switch(action){
    case "Attack":
        console.log("je valt de vijand aan!");
        break;
    case "Defend":
        console.log("Je bent aan het verdedigen");
        break;
    case "Run":
        console.log("Je rent weg");
        break;
    default:
        console.log("ongeldige actie"); 
}

// -----------------------------------

//Array
const scores = [78,85,65,90,88];

console.log(scores[0]);
console.log(scores[3]);
console.log(scores[5]);

for(const score of scores){
    console.log(score);
}

const string = "Hallo , dit is PGM";
for(const letter of string){
    console.log(letter);
}
console.log(scores.length);

//Pop
const lastElement = scores.pop();
console.log(lastElement);
console.log(scores);

//Push
scores.push(68);
// scores.push("getal");
console.log(scores);

//Split (String naar Array)
const tempString = "Welkom bij de 3 biggetjes!"; //String
const tempString2 = tempString.split(" "); // Array
console.log(tempString2);

//Join (Array naar String)
const scoreString2 = scores.join(" | ") // String
console.log(scoreString2);


//Functions
function sayHello(){
    console.log("Hello");
}

sayHello();

let getal1 = 5;
let getal2 = 10;
function multiply(x,y){
    const multiplied = x * y;
    return multiplied;
}

console.log(multiply(5, 6));

function isEven(getal){
    return getal % 2 === 0;
}

console.log(isEven(4))

function calculateBMI(weight, length){
    let bmi = weight / (length *  length);
    return bmi.toFixed(2);
}

const bmiResult = calculateBMI(70,1.75);
console.log(`Je BMI is: ${bmiResult}`);

//Objects
const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2021,
    isOnSale: true,
    price: {
        original: 50000,
        discount: 48000
    },
    color: ["white", "black", "red"],
    describe: function(){
        console.log("Dit is een tesla");
    }
}

car.describe();

console.log(car.color[1]);

const shoes = [
    {
     merk: 'Nike',
     type: "Running shoes",
     year:  2020,
     color: "Black",
     price: 1000
    },
    {
        merk: 'Adidas',
        type: "Running shoes",
        year:  2021,
        color: "Black",
        price: 1010
    },
]

console.log(shoes[1].year)

shoes[1].likes = 10;

console.log(shoes);

delete shoes[1].likes;

console.log(shoes);