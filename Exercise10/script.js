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
  let code = "";
  if (Number(c1.value) > cCode[0]) {
    code += "L";
  } else if (Number(c1.value) < cCode[0]) {
    code += "H";
  } else {
    code += cCode[0];
  }

  if (Number(c2.value) > cCode[1]) {
    code += "L";
  } else if (Number(c2.value) < cCode[1]) {
    code += "H";
  } else {
    code += cCode[1];
  }

  if (Number(c3.value) > cCode[2]) {
    code += "L";
  } else if (Number(c3.value) < cCode[2]) {
    code += "H";
  } else {
    code += cCode[2];
  }

  output.innerHTML += code + "<br>";
}
