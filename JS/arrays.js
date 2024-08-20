let arr = ['first element', 'second element', 'last element']
console.log(arr[0]) // output ' first element'
console.log(arr[1]) //  output ' second element'
console.log(arr[arr.length - 1]) //  output ' last element'


// Length of an Array:- The property length sets or returns the number of elements in an array.
let age = [33,55,67,18]
console.log(age.length)


// indexOf():- This method Search the array for an element and returns its position
let std = ["Mark", "John", "Jonas", "Jack"];
let a = std.indexOf("John");


// sort(): This method is used to sort the elements of an array
let sage = [33,55,67,18]
let s_age= age.sort(age)
//18,33,55,67


// reverse(): This method is used to reverses the element of an array. The first array element becomes the last and the last becomes the first.
let age = [33,55,67,18]
let r_age= age.reverse(age)
//18,67,55,33


// concat(): This method will returns a new array comprised of this array joined with an other array or value
let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric); // a,b,c,1,2,3


// push(): This method is used to add an item to the end of an Array
let fruits = ["Banana", "Orange", "Apple"];
let len = fruits.push('Mango')
// ["Apple", "Banana", "Orange", "Mango"]



// pop():- This method is used to remove an item from the end of an Array
let last = fruits.pop() // remove Mango (from the end)
["Apple", "Banana", "Orange"]


// shift():- This method is used to remove an item from the beginning of an Array
let first = fruits.shift() // remove Apple from the front
// ["Banana", "Orange"]



// unshift():- This method is used to add an item to the beginning of an Array
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana", "Orange"]


// splice(): This method is used to remove an item by index position
let removedItem = fruits.splice(pos, 1) // this is how to remove an item
// ["Strawberry", "Orange"]



// The syntaxs of creating object are following:-



let user = { 
    name: "Harry", // by key "name" store value "Harry"
    age: 25, // by key "age" store value 25
    language: “JavaScript” // by key "language" store value “ JavaScript”
  };


  objectName['propertyName'];
  console.log(user['name']);
console.log(user['age']);





/*console.log('We are in tut7.js and lets discuss about arrays');
let marks = [34, 23, 24, 93 ,73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23,123,21, 'Orange');
// console.log(marks);
// console.log(mixed);
// console.log(fruits[1]);

// console.log(arr.length);
// console.log(Array.isArray('dfdf'));
arr[0] = 'harry';
let arrelement = arr[0];
// console.log('element :', arrelement);
// console.log(arr);

let value = marks.indexOf(73);
// console.log(value)

// Mutating or Modifying arrays
// marks.push(3564);
// marks.unshift(1009);
// marks.pop()
// marks.shift()
// marks.splice(2, 3);
// marks.reverse()
let marks2 = [1, 2,3, 7]
marks = marks.concat(marks2);
// console.log(marks);

let myobj = {
    'first name': 'harry', 
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)
           
*/