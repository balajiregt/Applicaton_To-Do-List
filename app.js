let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputfield');
let DeleteAll=document.getElementById('Delete')

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    //clicking the list item
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', function(){
        paragraph.style.textDecoration = "none";
    })

   // paragraph.addEventListener('dblclick', function(){
     //   toDoContainer.removeChild(paragraph);
   // })
   Delete.addEventListener('click',()=>{
    toDoContainer.removeChild(paragraph)
})
})
