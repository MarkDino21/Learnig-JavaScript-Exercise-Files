var output = document.getElementById('title1');
var val = document.getElementById('val');

//test1
output.innerHTML= "<h1>" + document.title + "</h1>";
val.value = "Hello, World";

//test2
output.innerText = "<h1>New Title</h1>";
val.value = "New text";

//test3
output.innerHTML = "<h1>New Title</h1>";
val.value = output.innerText;
