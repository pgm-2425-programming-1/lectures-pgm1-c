const number = 10; //number
let number2; //undefined

if( number > 10){
    console.log("Het getal is groter dan 10");
} else if(number < 10){
    console.log("Het getal is kleiner dan 10.");
} else{
    console.log("Het getal is gelijk aan 10");
}


//Switch

const dag = 3;

switch(dag) {
    case 1:
        console.log("Maandag");
        break;
    case 2:
        console.log("Dinsdag");
        break;
    case 3:
        console.log("Woensdag");
        break;
    case 4:
        console.log("Donderdag");
        break;
    case 5:
        console.log("Vrijdag");
        break;
    default:
        console.log("Weekend");
}

const fruit = "mango";

switch(fruit){
    case "apple":
        console.log("I like apples");
        break;
    case "banana":
        console.log("I like bananas");
        break;
    case "orange":
        console.log("I like oranges");
        break;
    default: // -> als geen enkele case klopt -> default uitvoeren
        console.log(`The fruit ${fruit} is not in my list`); 
}
