//I add a new highLighting text feature on the text.
// Creating a new Div element
let div = document.createElement('div');
div.setAttribute("id","edit")
div.innerText = "Double Click on me to Edit";

// It will increase the text size when mouseover on it.
div.addEventListener('mouseover',function(){
    div.style.fontSize = '150%'
})

// Appending the element to the body
document.body.appendChild(div)

// Creating the editable element
//Whenever someone double click on the text it will turn to editable.
let inpt = document.createElement('input');
inpt.setAttribute("value","") 
document.getElementById('edit').addEventListener('dblclick',function(){
    div.replaceWith(inpt)
});

// Click outside to save the text into local storage as (Edited) name.
inpt.addEventListener('blur',function(){
    localStorage.setItem('Edited',JSON.stringify(inpt.value))
})










/*// Firstly you create a div
//And the write js code here
let body = document.body
body.addEventListener("click",()=>{
let div = document.querySelector(".edit")
localStorage.setItem("our",div.innerHTML)
})

show=()=>{
let div = document.querySelector(".edit")
div.innerHTML = localStorage.getItem("our")

}

if (localStorage.getItem("our")!=undefined){
       show()
}
// END CODE 😊
