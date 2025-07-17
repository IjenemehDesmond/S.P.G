const words = ["apple", "banana","elephant","python","school"];
let currentWord = " ";
let score = 0;

function maskWord(word){
    let chars = word.split (" ");
    let numToMask = Math.floor (word.length / 3);
    let indices = [];
    
    while(indices.length < numToMask){
        let rand = Math.floor(Math.random() *
    word.length);
        if (!indices.includes(rand))
    indices.push(rand);
    }
    indices.forEach(i => chars[i] = "_" );
    return chars.join(" ");
    
}
 function newWord(){
    currentWord = words[ Math.floor(Math.random() *
    word.length)];
    document.getElementById("masked-word").textContent = maskWord(currentWord);
    document.getElementById("user-input").value = " ";
    document.getElementById("feedback").textContent= " ";
 }

function checkAnswer() {
    let input = document.getElementById("user-input").value.toLowerCase();
    if (input === currentWord){
        score++;
document.getElementById("feedback").textContent = "☑ Correct!";
    } else{
document.getElementById("feedback").textContent = "✖ Wrong! The word was: ${currentWord";
    }
document.getElementsById("score").textContent = ("score");
}
function nextWord() {
    newWord();
 }

 window.onload = newWord;