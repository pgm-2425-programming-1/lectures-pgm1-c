const games = ["The legend of Zelda", "Minecraft", "Fortnite", "Rocket League"];

// For loop 
for(let i = 0; i < games.length; i++){
    console.log(`Game ${i + 1}: ${games[i]}`);
}

//For ... of loop
for(const game of games){
    console.log(`Game: ${game}`);
}

//forEach 
games.forEach(function (game, index){
    console.log(`Game ${index + 1}: ${game}`);
})

//forEach => arrow function
games.forEach((game,index) => {
    console.log(`Game ${index + 1}: ${game}`);
})