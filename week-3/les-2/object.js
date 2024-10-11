const game = {
    title: "The Last of Us",
    developer: "Naughty Dog",
    year: 2013,
    platforms: ['PS4', 'Xbox One', 'PC'],
    score: 9.8,
}

for(const el in game){
    console.log(el);
    console.log(`${el}: ${game[el]}`);
}

console.log(game.developer);
console.log(game['developer']);



game.year = 2015;

console.log(game);

game.likes = 10;
console.log(game);

game.likes += 1;
console.log(game);

delete game.likes;
console.log(game);

const fruits = [
    {
        name: "apple",
        color: "red",
        taste: "sour"
    },
    {
        name: "banana",
        color: "yellow",
        taste: "sweet"
    },
    {
        name: "orange",
        color: "orange",
        taste: "salty"
    }
]

// console.log(fruits[0].taste);

for(const fruit of fruits){
    console.log(`The color of ${fruit.name} is ${fruit.color}`);
}

const shoes = [
    {
        name: "sneaker",
        color: "black",
        price: {
            original: 100,
            discount: 80
        },
        sizes: [7,8,9,10,11,12]
    },
    {
        name: 'boots',
        color: 'brown',
        price: {
            original: 120,
            discount: 100
        },
        sizes: [7, 8, 9, 10, 11, 12]
    }
]

console.log(shoes[0].price.discount);