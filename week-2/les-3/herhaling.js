function vote(candidate, votes){
    return candidate + " heeft " + votes + " stemmen."
}

console.log(vote("Kandidaat A", 40));
console.log(vote("Kandidaat B", 30));
console.log(vote("Kandidaat C", 20));


// ---------------------------------

let candidates = ["Kandidaat A", "Kandidaat B", "Kandidaat C"];
let votes = [0 , 0, 0];

function voteForCandidate(candidate){
    let index = candidates.indexOf(candidate);
  
    if(index !== -1){ //Check of er wel een index aanwezig is
        votes[index]++;
        console.log("Stem toegevoegd aan " + candidate);
    }
    else{
        console.log("Onbekende kandidaat!");
    }

}


voteForCandidate("Kandidaat C");
voteForCandidate("Kandidaat A");
voteForCandidate("Kandidaat B");
voteForCandidate("Kandidaat B");

console.log(votes);

function showResults(){
    for(let i = 0; i < candidates.length ; i++){ // Zie lussen in syllabus
        // console.log(candidates[i] + " heeft " + votes[i] + " stemmen.")
        console.log(`${candidates[i]} heeft ${votes[i]} ${votes[i] === 1 ? "stem." : "stemmen."}`); 
        //Indien je de tekst wil aanpassen aan de hand van 1 of meerdere stemmen
        //--> Ternary
    }
}

showResults();

