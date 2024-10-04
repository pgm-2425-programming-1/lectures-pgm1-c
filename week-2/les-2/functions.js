//function

function greet(name = "students"){
    return "Hello " + name + "!";
}

console.log(greet("Luka"));

function add(a , b){
    //
    let test = "test"; //Deze variabele leeft enkel in de scope van deze function
    const sum = a + b;
    return sum;

}

const addedSum = add(10,6);
console.log(addedSum);

// Even numbers
function containsEvenNumbers(numbers){
    //doorloop voor elk getal
    for(let number of numbers ){
        if(number % 2 === 0){
            console.log("Even getal gevonden");
            return;
        }
    }

    console.log("Geen even getal gevonden");
}

containsEvenNumbers([1,3,7,11]);
containsEvenNumbers([1,3,6,11]);

