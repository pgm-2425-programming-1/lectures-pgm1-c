const game = {
    title: 'Rocket League',
    genre: 'Sport',
    platform: 'PC',
    year: 2006,
    multiplayer: false
}

//Aanspreken van een object
console.log(game.title);
console.log(game['year']);

//for ... in loop
for(const property in game){
    console.log(`${property}: ${game[property]}`);
}

