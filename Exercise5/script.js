
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
//test 1: retrieve.

console.log(friends.friend1.age);
console.log(myFriends[0].age);

//test 2: update.
friends.friend1.age=25;
console.log(friends.friend1.age);

myFriends[0].age=15;
console.log(myFriends[0].age);
