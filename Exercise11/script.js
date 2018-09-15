let output = document.getElementById("output");
const secretWords = ["mama", "i love you", "i miss you", "hug me", "kiss me"];
let wordPick = "";

output.innerHTML = "<h3>Words: " + secretWords + "</h3>";

function question() {
  wordPick = secretWords[Math.floor(Math.random() * secretWords.length)];
  guess(prompt("What I am thinking?"));
}

function guess(secret) {
  if (secret == wordPick) {
    output.innerHTML += "<br>" + "<strong>You guest it right!</strong>";
  } else {
    guess(prompt("Guess again"));
  }
}
