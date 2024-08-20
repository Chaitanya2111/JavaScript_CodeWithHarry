console.log('Welcome to tutorial 14');
/*
element selectors:
1. Single element selector
2. Multi element selector

*/

// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Harry is a good boy';
element.innerHTML = '<b>Harry is a good boy</b>';
// console.log(element.innerText);


let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';
console.log(sel)

// 2. Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems)

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
   element.style.color = 'blue'; 
}
// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue'; 
// });
// console.log(elems[0].getElementsByClassName('child'))






// Accessing Elements by ID:-

document.getElementById(elementID);
<h1 id="demo">Heading 1</h1>
var x = document.getElementById("demo");
x.style.color = "red";
x.className;
x.childNodes;
x.parentNode;
x.innerText = 'JavaScript Tutorial';
x.innerHTML = '<b>Harry is a good boy</b>';




// querySelector;-
document.querySelector('#myclass');
document.querySelector('.myclass');
document.querySelector('li');



// Multiple Element Selector:-
document.querySelectorAll('.heading')
document.querySelectorAll("p.animation ");




// document.querySelectorAll("p.animation ");
{/* <article> My article 1</article>
<article> My article 2</article> */}

let mytag = document.getElementsByTagName('article');
for (let i = 0; i < mytag.length; i++) {
mytag[i].style.border = '1px solid blue';
}



// Accessing Elements by Class:-
document.getElementsByClassName(class_name);

{/* <div class="demo"> class 1</div> */}
{/* <div class="demo"> class 2</div> */}
document.getElementsByClassName("demo").length;
