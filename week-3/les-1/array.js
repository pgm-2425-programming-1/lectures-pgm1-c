const books = ["The Hobbit", "Harry Potter"," A song of ice and fire"];

//split
const bookString = "The hobbit, Harry Potter, A song of ice and fire";
const bookArray = bookString.split(",")
console.log(bookArray);

//join
const bookString2 = books.join(" | ")
console.log(bookString2);

//push
books.push("The Catcher in the Rye");
console.log(books);

//pop
const lastBook = books.pop();
console.log(lastBook);
console.log(books);

//includes
console.log(books.includes("The Catcher in the Rye"));
console.log(books.includes("Harry Potter"));


//indexOf
const position = books.indexOf("Harry Potter");
console.log(position);

const position2 = books.indexOf("The Hunger Games");
console.log(position2);


//length
console.log(books.length);

//Combinatie  includes en indexOf

const books2 = ["The Hobbit", "Harry Potter", "A song of ice and fire", "The Catcher in the Rye", "The Hunger Games"];

if(books2.includes("Harry Potter")){
    console.log(`Harry Potter staat op index ${books2.indexOf("Harry Potter")}`)
} else{
    console.log("Harry Potter staat  niet in de boekenlijst");
}
