console.log("This is tutorial 56 on for-in and for-of loops");

let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];


// **********For in loop*******

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);   
// }


// 1. ITERATING AN OBJECT
let obj = {
    name: "Harry",
    language: "JavaScript",
    hobbies: "Android app development"
}
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }

// 1.2 Iterating an object using for-in loop:
for (let key in obj){
    console.log(obj[key]);
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "This is my string";
for (let char in myString){
    console.log(myString[char]);
}

// Quiz: Use traditional for loop to iterate through the same string


// **********For of loop***********
console.log("*****************For of loop starts here**************")
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}










/*
for loop:-
for (initialization; condition; final expression) {
    // code to be executed
}


const myarray = ['abcd', 'efgh', 'i', 'eeb12'];
for (let i = 0; i < myarray.length; i++) {
console.log(array[i]);
} // Result: abcd,efgh,I,eeb12



The for..in loop:-
for (variable in enumerable) {
        // do stuff
}


const obj = {
        first: 134,
        second: 255,
        third: 367,
        fourth: 433
}
for (const key in obj) {
        console.log( obj[key] )
} // Result: 134, 255, 367, 433




for (initialization; condition; final expression) {
    // code to be executed
}




For…Of Loop:-

let students = [ "Mark", "Harry", "Joe" ];
// Print out each type of shark
for (let std of students) {
   console.log(std);
} //Result: Mark, Harry, Joe




*/