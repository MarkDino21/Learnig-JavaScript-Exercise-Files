//--test1 succedded-----
//--test2 Succedded-----
//--test3 Succedded-----
//--test4 Succedded-----
//--test5 Succedded-----

function test1ToTest3(){
  var output = document.getElementById('output');
  var x= prompt("Enter a number of counts to loop");

  while (Number.isNaN(parseInt(x))) {
  //while (isNaN(x)) {
    alert("Please Enter a valid and positive numbers only.");
    x= prompt("Enter a number of counts to loop");
  }

  if (x>=0){
    //var i=0
    //do {
    //  output.innerHTML += "count " + i + "<br>";
    //  i++;
    //}
    //while (i<x);

  //--test3: convert DO LOOP to FOR LOOP---
    for(var i=0;i<x;i++){
      output.innerHTML += "count " + i + "<br>";
    }
  }
}

//--test4: Use Nested loop to create a table with 10 row and 2 col
function test4() {
  var output = document.getElementById('output');
  var html = "<table>"
  for (var row = 0; row < 10; row++) {
    html+= "<tr>"
    for (var col = 0; col < 2; col++) {
      html+= "<td>" + "col " + col + "</td>";
    }
    html+= "</tr>"
  }
  html+= "</table>";
  output.innerHTML+= html;
}

//--test5: recreate test4 with 10 row and 5 col. make the content number from 1 to 50
function test5() {
  var output = document.getElementById('output');
  var html = "<table>"
  var num = 1;

  for (var row = 0; row < 10; row++) {
    html+= "<tr>"
    for (var col = 0; col < 5; col++) {
      html+= "<td>" + "col " + num + "</td>";
      num++;
    }
    html+= "</tr>"
  }
  html+= "</table>";
  output.innerHTML+= html;
}
