const output = document.getElementById("output");
const item = document.getElementById("txtItem");
var myList = [];

function addItem() {
  myList.push(item.value);
  output.innerHTML += myList.length + ". " + item.value + "<br>";
  item.value = "";
}
