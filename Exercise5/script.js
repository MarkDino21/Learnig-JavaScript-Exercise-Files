
var bob ={
  age: 30,
  hair: "brown",
  eyes: "blue",
  works: "developer"
};
var friends={
  friend1: bob,
  friend2: {
    age: 30,
    hair: "black"
  }
};
var myFriends =[bob,{age:30, hair: "black"}];
//test: retrieve.

console.log(friends.friend1.age);
console.log(myFriends[0].age);
