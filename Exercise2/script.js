/*-----------Exercise 1.1------------------
console.log('Hello world');
console.error('Error code');
console.warn('Warning Message');

console.log('%cHello world','color:green');
console.log('%cHello world','background-color:green; color:red; font-size: 15px; font-weight: bold');
*/


//---------------Exercise 1.2--------------
var task = ["cooking", "laundry", "wasshing dishes","sleeping"];
var progress = ["done", "in progress", "to do"];

var question1 = prompt("Which task from 1-" + task.length + "?");
var question2 = prompt("what status?: \n1=done, 2=in progress, 3=to do");
var task1=Number(question1)-1;
var progress1=Number(question2)-1;
//question1;
//question2;

console.log('today you will ' + task[task1] + ' status of work is ' + progress[progress1]);
