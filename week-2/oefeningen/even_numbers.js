const numbers = [10, 18, 17, 11, 7, 30, 85, 37, 24, 29, 49];
let evenNumbers = [];

for(const number of numbers){
    if( number % 2 === 0){
        evenNumbers.push(number);
    }
}

console.log(evenNumbers);
