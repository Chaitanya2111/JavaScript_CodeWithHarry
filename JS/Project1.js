// if useer adds a note ,add it to the localstorage

showNotes();

let addbtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj ));
    addTxt.value ="";
    // console.log(notesObj);

    showNotes();

})
 
//  Function to show elements from localstorage

function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let  html ="";
    notesObj.forEach(function(element,index){
        html += `
        <div class="notecard my-3 mx-3 card" style="width: 18rem;">
    
        <div class="card-body">
          <h5 class="card-title">Notes ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)"    class="btn btn-primary">Delete Note<button>
        </div>
      </div>
        `
    });

    let notesElm= document.getElementById("notes");
    if(notesObj.length != 0){
        notesElm.innerHTML =html;
    }
     else{
         notesElm.innerHTML = `Nothing to show! "Add note" section above to add notes`
     }
}


// function to a delete a note

function deleteNote(index){
    // console.log('i am deleting',index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

notesObj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesObj ));

showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
let inputVal = search.value.toLowerCase();
    // console.log('Input event fired',inputVal);
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardTxt =  element.getElementsByTagName("p")[0];
        if(cardTxt.includes(inputVal)){
            element.style.display ="block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);

    })
})