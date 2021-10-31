let addBtn=document.getElementById("add-btn");
let addTitle=document.getElementById("note-title");
let addText=document.getElementById("note-text");


addBtn.addEventListener("click",(e) =>{

    if(addTitle.value== "" || addText.value=="")
    {
        return alert("Please add note title and text");

    }

    let myObj={
        title: addTitle.value,
        text: addText.value
    }

    console.log(myObj);

    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTitle.value="";
    addText.value="";

    let notes=localStorage.getItem("notes");

    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    console.log(notes);

     

    showNotes();
})

function showNotes(){
    let notes=localStorage.getItem("notes");

    if(notes==null)
    {
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element,index){
        html+=
        `<div id="note">
        <p class="note-counter">
           Your Note ${index+1}
        </p>
        <div class="sss"> 
        <h3 class="note-title">
            ${element.title}
        </h3>

        <p class="note-text">
            ${element.text}
        </p>

        <button id="${index}" onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
        <button id="${index}" onclick="editeNote(this.id)" class="note-btn" class="note-btn">Edit Note</button>
    </div >
    </div>`
    ;
    });

    let noteElm= document.getElementById("notes");

    if(notesObj.lenght !=0){
        noteElm.innerHTML =html;
    }
    else{
        noteElm.innerHTML="Not any notes here";
    }

}

// for deleting

function deleteNote(index)
{
    let confirmDel= confirm("You are deleting this note!")
    let notes = localStorage.getItem("notes");

    if(notes==null)
    {
        notesObj=[];

    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}
 



// editing

function editeNote(index)
{
    let notes=localStorage.getItem("notes");
    if(addTitle.value !== "" || addText.value !=="")
    {
        return alert("Please clear the form before editing");

    }

    if(notes==null)
    {
        notesObj=[];

    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.findIndex((element, index) => {
        addTitle.value= element.title;
        addText.value=element.text;
    })

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    
    showNotes();
}
showNotes();