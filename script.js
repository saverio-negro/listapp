var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var h1 = document.querySelector("h1");




window.addEventListener("load", function(){

    for(let i = 0; i < ul.children.length; i++) {
        ul.children[i].children[0].addEventListener("click", removeParentList);
        ul.children[i].addEventListener("click", crossItOff);
    }

});




function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + " "));
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.onclick = removeParentList;
    li.appendChild(deleteButton);
    li.onclick = crossItOff;
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
    
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode == 13) {
        createListElement();
    }
    
}

function removeParentList(event){
    event.target.parentNode.remove();
}

function crossItOff(event){
    event.target.classList.toggle("done");
}






button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
var title = prompt("Set up a title for your list");
h1.innerHTML = title;