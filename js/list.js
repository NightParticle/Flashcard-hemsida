"use strict";

let userIndex = JSON.parse(localStorage.getItem("userIndex"));
let tempUsers = JSON.parse(localStorage.getItem("users"));

function LoadCollections() {
  for (let i in tempUsers[userIndex].collections) {
    CreateCollection(i);
  }
  MouseHover();
}

// Create new collection
function NewCollection() {
  if (document.getElementById("collection-name").value.trim() != "") {
    let createdCollection = {
      name: document.getElementById("collection-name").value,
      content: new Array(),
    };
    let users = JSON.parse(localStorage.getItem("users"));
    users[JSON.parse(localStorage.getItem("userIndex"))].collections.push(
      createdCollection
    );
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    return false;
  }
}

// Creates a new collection in html
function CreateCollection(index) {
  let div = document.createElement("div");
  div.className = "flashcard-collection";

  let buttonDiv = document.createElement("div");
  buttonDiv.innerHTML = `<a href="">Study</a>
  <a href="">Edit</a>`;

  let h4 = document.createElement("h4");
  h4.innerHTML = JSON.stringify(tempUsers[userIndex].collections[index].name);

  div.innerHTML =
    `<h4>` +
    h4.innerHTML +
    `</h4>` +
    `<div><a href="">Study</a>
  <a href="edit.html">Edit</a></div>`;
  document.getElementById("white-list").appendChild(div);
}

function MouseHover() {
  let divs = document.getElementsByClassName("flashcard-collection");

  for (let i = 0; i < divs.length; ++i) {
    divs[i].addEventListener("mouseover", function () {
      let h4Child = divs[i].childNodes[0].innerHTML;
      localStorage.setItem("interactColl", JSON.stringify(h4Child));
    });
  }
}
