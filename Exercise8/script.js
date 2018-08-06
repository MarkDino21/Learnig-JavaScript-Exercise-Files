//--test1 succedded-----
var output = document.getElementById('output');
var x= prompt("Enter count of loop");
x= Number(x);
var i =0;
do {
  i++;
  output.innerHTML += "count " + i + "<br>";
}
while (i<x);
