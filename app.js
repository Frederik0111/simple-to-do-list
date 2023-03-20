"use strict";

window.addEventListener("load", initApp);

 const newTodo = document.querySelector("#input-new-to-do");
 const list = document.querySelector("#to-do-list");

function initApp() {
    document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
    // const html = /html
    // <li>
    //   <span>$(newToDo.value)</span>
    //   <button>Delete</button>
    // </li>;
    //
    // list.insertAdjacentHTML("beforend", html);
    // li:last-child button

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.textContent = newTodo.value; 
    button.textContent = "Delete";


    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);

    button.addEventListener("click", removeToDo);
}

function removeToDo() {
    console.log("remove");

    console.log(this);
    console.log(this.parentNode);

    this.parentNode.remove();
}

