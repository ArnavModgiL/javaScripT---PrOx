// Guess the number Game 🎯 :

let random = Math.floor(Math.random() * 10) + 1;
let guess;

while(guess != random) {
    guess = prompt("Guess a number between 1 to 10:");
}
if(guess > random) {
    console.log("Too High !");
}
else if( guess < random) {
    console.log("Too Low !");
}
else {
    console.log("🎉 Correct! You guessed it.")
}