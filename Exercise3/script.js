//-----------Exercise 3 Array------------------
var newHolder = ['cat','dog','rabbit', 'bird'];
console.log(newHolder);
//**Challenge: target output
//['Horse','fish','fish','fish','fish','fish','fish','fish','rabbit',
//'dog','sheep']

newHolder[10]="Horse";
newHolder.fill("fish",3,10);
console.log(newHolder);
