const animals = ["Cat","Dog","Ape", "Parrot"];

function checkAnimal(animalList, animal){
    if(animalList.includes(animal)){
        console.log(`${animal} is in the list`);
    } else{
        console.log(`${animal} is not in the list`);
    }
}

// function checkAnimal(animalList, animal){
//     animalList.includes(animal) ? console.log(`${animal} is in the list`) : console.log(`${animal} is not in the list`);
// }

checkAnimal(animals, 'Tiger');
checkAnimal(animals, 'Parrot');

function addAnimal(animalList, animal){
    if(!animalList.includes(animal)){
        animalList.push(animal);
        console.log(`${animal} is added to the list`);
    } else{
        console.log(`${animal} is already in the list`);
    }
}

addAnimal(animals, 'Dog');
addAnimal(animals, 'Lion');

function findAnimal(animalList, animal){
    const index = animalList.indexOf(animal);
    if(index !== -1){
        console.log(`${animal} is at index ${index}`);
    } else{
        console.log(`${animal} is not in the list`);
    }
}

findAnimal(animals, 'Tiger');
findAnimal(animals, 'Lion');