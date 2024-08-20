console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();





/*

What is a Callback?
A callback is a function that is executed after another function has finished executing. As we have studied earlier that functions are objects. Functions can take functions as arguments and can be returned by other functions. Functions that take another function as an argument are called higher-order functions. So, the callback function can also be defined as any function that is passed as an argument is called a callback function


function fun1(){
   console.log(“Code With Harry”);
 }
function fun2(){
   console.log(“JavaScript Tutorial”);
 }
first();
second();





How to create a Callback:-
Suppose we want to log a message to the console but it should be there after 5 seconds.

function myMessage (str) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Code With Harry`);
    }, 5000);
}

There is a built-in method called “setTimeout”, which calls a function after a given period of time. So here, the myMessage function is being called after 5 seconds. (1 second = 1000 milliseconds). In other words, the myMessage function is being called after something happened (after 5 seconds passed for this example), but not before. So, the myMessage function is an example of a callback function.

Here is an example of callback functions in JavaScript:

function addition(x, y , callback){
setTimeout(() => {
document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
callback(); 
 }, 5000); } 
 // display() function is called just after the ending of addition() function
function display(){ 
document.write('Numbers added!'); 
 } 
 // Calling addition() function
addition(5,5,display);

The sum of 5 and 5 is 10.
Numbers added!


*/