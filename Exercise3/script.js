//-----------Exercise 3 Array------------------
var newHolder = ['cat','dog','rabbit', 'bird'];
console.log(newHolder);
//**Challenge: target output
//['Horse','fish','fish','fish','fish','fish','fish','fish','rabbit',
//'dog','sheep']

var removed = newHolder.splice(1,2);
console.log(removed);
removed.reverse();
console.log(removed);
