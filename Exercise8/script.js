//--test1 succedded-----
var output = document.getElementById('output');
var x= Number(prompt("Enter a number of counts to loop"));
//x= Number(x);
var i =0;
if(x>0){
  do {
    i++;
    output.innerHTML += "count " + i + "<br>";
  }
  while (i<x);
}
else{
  alert("Please Enter a positive and valid number only.");
}
