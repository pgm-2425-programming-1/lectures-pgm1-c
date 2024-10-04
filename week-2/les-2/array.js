// push() en pop()

let fruits = ["apple", "banana", "orange"];
fruits.push("kiwi");  // Voeg een element toe aan het einde
console.log(fruits);  // Output: ["apple", "banana", "orange", "kiwi"]

let lastFruit = fruits.pop();  // Verwijder het laatste element
console.log(fruits);  // Output: ["apple", "banana", "orange"]
console.log(lastFruit);  // Output: "kiwi"

// ---------------------------------------------

//shift() en unshift()

let numbers = [1,2,3,4]; 
numbers.unshift(0); //Voegt element toe aan het begin 
console.log(numbers);

let firstNumber = numbers.shift(); //verwijdert het element op het begin [0]
console.log(numbers);
console.log(firstNumber);

// -----------------------------------------------

// split() en join()
let sentence = "Hello World, this is JavaScript";
let words = sentence.split(" ") //Zet elk woord als een element in een array -> kijken op de spatie
console.log(words);

let newSentence = words.join(" ");  // Combineer de array-elementen weer tot een string
console.log(newSentence);

//------------------------------------------------

// slice() en splice()
let animals = ["dog", "cat", "gorilla", "lion"];

//Slice
let fewAnimals = animals.slice(1,3); //Vanaf de index 1 neem je tot index 3 (3 niet inbegrepen)
console.log(fewAnimals);

//Splice
animals.splice(1,2, "parrot"); //vanaf index 1 verwijderen we er 2 en voegen we "Parrot" in de plaats (verwijderen van index[1] en index[2])
console.log(animals);

