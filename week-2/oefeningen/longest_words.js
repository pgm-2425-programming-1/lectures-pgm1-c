const sentence = "Uw variabele stond in het Nederlands";

function searchLongestWord(newSentence){
    const words = newSentence.split(" ");
    let longestWord = "";
    for(const word of words){
        if(longestWord.length < word.length){
            longestWord = word
        }
    }

    return longestWord;
}

console.log(searchLongestWord(sentence));

