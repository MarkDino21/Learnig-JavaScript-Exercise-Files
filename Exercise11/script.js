let output = document.getElementById("output");
const secretWord = "mama";

function question() {
  guess(prompt("What is the secret word?"));
}

function guess(secret) {
  if (secret == secretWord) {
    output.innerHTML = "You guest it right!";
  } else {
    guess(prompt("Guess again"));
  }
}
