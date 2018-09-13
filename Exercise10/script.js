let c1 = document.getElementById("text1");
let c2 = document.getElementById("text2");
let c3 = document.getElementById("text3");
let output = document.getElementById("output");
let cCode = [];

for (x = 0; x < 3; x++) {
  cCode.push(Math.floor(Math.random() * 9 + 1));
}
// output.innerHTML = cCode + "<br>";

function crack() {
  let guess = [c1.value, c2.value, c3.value];
  for (i = 0; i < 3; i++) {
    output.innerHTML += check(guess[i], cCode[i]);
  }
  output.innerHTML += "<br>";
}

function check(a, b) {
  let c = "";
  if (a > b) {
    c = "L";
  } else if (a < b) {
    c = "H";
  } else {
    c = b;
  }
  return c;
}
