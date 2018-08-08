//--test1 succedded-----
var output = document.getElementById('output');
var x= prompt("Enter a number of counts to loop");

while (isNaN(x)) {
  alert("Please Enter a valid and positive numbers only.");
  x= prompt("Enter a number of counts to loop");
}

var i=0
do {
  output.innerHTML += "count " + i + "<br>";
  i++;
}
while (i<x);
