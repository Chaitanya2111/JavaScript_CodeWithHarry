console.log("This is tutorial 17 on events");

document.getElementById("heading").addEventListener("click", function(e) {
  let variable;
  console.log("You have clicked the heading");
  variable = e.target;
  variable = e.target.className;
  variable = Array.from(e.target.classList);

  variable = e.target.id;
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);
  // location.href = '//codewithharry.com'
});







/* 

1)HTML-attribute:-
<input value="Click here" onclick="alert('Click here!')" type="button">


2)addEventListener():
element.addEventListener(event, function, useCapture);

document.addEventListener("click", function(){ alert("Event Occurred"); });
document.addEventListener("click", myfunc);
 function myfunc () {
 document.getElementById("demo").innerHTML = "Hello World";
 }



3)Passing Event as a Parameter:-
document.addEventListener("click", myfunc);
function myfunc(event) {
alert(event.type + " at " + event.currentTarget);
alert("Coordinates: " + event.clientX + ":" + event.clientY);};



Event Properties and Methods:-

Property/Method

Description

altKey

It will return whether the "ALT" key was pressed when the mouse event was triggered.

button

It will return which mouse button was pressed when the mouse event was triggered.

charCode

It will return the Unicode character code of the key that triggered the onkeypress event.

clientX

It will return the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered.

clientY

It will return the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered.

code

It will return the code of the key that triggered the event.

deltaX

It will return the horizontal scroll amount of a mouse wheel (x-axis).

deltaY

It will return the vertical scroll amount of a mouse wheel (y-axis).

deltaZ

It will return the scroll amount of a mouse wheel for the z-axis.

detail

It will return a number that indicates how many times the mouse was clicked.

keyCode

It will return the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event.

location

It will return the location of a key on the keyboard or device.

pageX

It will return the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered.

pageY

It will return the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered.

screenX

It will return the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered.

screenY

It will return the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered.

shiftKey

It will return whether the "SHIFT" key was pressed when an event was triggered.

type

It will return the name of the event.

which

It will return which mouse button was pressed when the mouse event was triggered.

view

It will return a reference to the Window object where the event occurred.

 

 */