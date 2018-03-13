/*-----------Exercise 3 Array------------------
var newHolder = ['cat','dog','rabbit', 'bird'];
console.log(newHolder);
//**Challenge: target output
//['Horse','fish','fish','fish','fish','fish','fish','fish','rabbit',
//'dog','sheep']

newHolder[10]="Horse";
newHolder.fill("fish",3,10);
//console.log(newHolder);
newHolder.reverse();
//console.log(newHolder);
newHolder[newHolder.length-1]='sheep';
console.log(newHolder);
*/

//---------Exercise 3.1 using indexOf -----------
var newHolder = ['cat','dog','rabbit', 'bird'];
var verifier = prompt('Enter the animals you want');
var animalIndex = newHolder.indexOf(verifier);
var check = (animalIndex >= 0)? newHolder[animalIndex] + " is available.": verifier + " is not available";
alert(check);
