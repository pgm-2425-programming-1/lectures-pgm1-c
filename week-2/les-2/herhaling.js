const fruits = ["apple", "banana", "mango"]; //array

console.log(fruits);
console.log(fruits[1]);

fruits.push("orange");
console.log(fruits);

fruits.pop();
console.log(fruits);


// ---------------------

const numbers = [1,2,3,4,5]; //array[numbers]

// for(const number of numbers){
    
//     if(number === 3){
//         console.log('nummer 3 is aanwezig');
//         return;
//     }
// }

const word = "development";

for(const letter of word){
    console.log(letter);
}