console.log('This is tut 18');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// // btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);

// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down ", e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter', function(){


//     console.log('You entered no')
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('You exited no')
// })

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})







/*      

1) Dblclick:-
const myclick = document.querySelector('aside');
myclick.addEventListener('dblclick', function (e) {
console.log(“Double click event occur”);});



2)Mousemove:-
const test= document.getElementById('test');
test.addEventListener('mousemove', function (e) {
console.log(“ Mousemove event occur”);});



3)Mouseover and mouseout:
const test= document.getElementById('test');
test.addEventListener("mouseover", function( event ) { event.target.style.color = "red";});


const test= document.getElementById('test');
test.addEventListener("mouseout", function( event ) {   
event.target.style.color = "red";});



4)Example of Mouseenter:-
const mouseTarget = document.getElementById('mouseTarget');
mouseTarget.addEventListener('mouseenter', function(e) {
mouseTarget.style.border = '5px dotted blue';});



5)Example of Mouseleave:-
const mouseTarget = document.getElementById('mouseTarget');
mouseTarget.addEventListener('mouseleave', function(e){
mouseTarget.style.border = '1px solid red'; });


6)Example of mousedown:
myevent.addEventListener('mousedown', function(e) {
console.log("Mousedown event occur")});


7)Example of mouseup:
myevent.addEventListener('mouseup', function(e) {
console.log("Mouseup event occur")});


*/