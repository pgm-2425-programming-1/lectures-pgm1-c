//Array
const colors = ["red", "green", "orange", "blue"];
const numbers = [1,2,3,4];

console.log(colors[1]); //Geeft het 2de element terug van de array -> beginnen altijd bij 0!
console.log(colors.length); //Geeft de lengte van een array terug -> 4 elementen in dit geval
console.log(colors[3]); 
colors.push('yellow'); //voegt iets toe aan de array (laatste element)
console.log(colors);
colors.pop(); //verwijdert het laatste element van de array
console.log(colors);

//Een array start dus altijd op de index 0 !!!

//Loops
for(const color of colors){ //Doorloopt de array en zal voor elk element in de array de code uitvoeren
    console.log(color);
}

const word = "bibliotheek"; 
for(const letter of word){ //hoeft geen array enkel te zijn , ook door een string kan je een for loop gebruiken.
    console.log(letter);
}

