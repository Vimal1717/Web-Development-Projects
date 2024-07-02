

window.onload = function() {
  loadList();
};


function add() {
  var ul = document.getElementById("list-container");
  var a = document.getElementById("a");

  if(a.value!=""){
    var listitem = document.createElement("li");
    listitem.innerHTML ='<input readOnly style="width:60%; height:40px; font-size:16px; margin-bottom:10px;" value="' + a.value + '"> <button onclick="markDone(event)">Done</button> <button onclick="removeItem(event)">DELETE</button>';
    ul.append(listitem);
    saveList();
  }
}


function markDone(event) {
  var inputElement = event.target.previousElementSibling; 
  inputElement.style.textDecoration = "line-through";
  saveList();
}


function removeItem(event) {
  event.target.parentElement.remove();
  saveList();
}


function saveList() {
  var ul = document.getElementById("list-container");
  localStorage.setItem("todoList", ul.innerHTML);
}


function loadList() {
  var ul = document.getElementById("list-container");
  ul.innerHTML = localStorage.getItem("todoList") || "";
}

