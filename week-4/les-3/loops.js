function generateRandomNumber(max){
    return Math.floor(Math.random() * (max + 1));
}

//For-loop 
// for(let i = 0; i < 10; i ++){
//     console.log(i);
// }

//for-loop (Array)
const items = ["item 1", "item 2"];
for(let i = 0; i < items.length ; i++){
    console.log(items[i])
}

console.log("-----------------------------------------");

//Do ... while -> minstens 1x keer 
const randomNum = 7;
let guess;

// do{
//     guess = generateRandomNumber(10)
//     console.log(guess);
// } while(guess !== randomNum)


console.log("-----------------------------------------");


    //while
guess = generateRandomNumber(10);
while(guess !== randomNum){
    guess = generateRandomNumber(10);
    console.log(guess);
}