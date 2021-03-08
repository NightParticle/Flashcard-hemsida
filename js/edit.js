"use strict";

let collToEdit = JSON.parse(localStorage.getItem("interactColl"));
let tempUsers = JSON.parse(localStorage.getItem("users"));
let tempCards =
  tempUsers[JSON.parse(localStorage.getItem("userIndex"))].collections;
let cardIndex;

document.getElementById("add-card").addEventListener("click", function () {
  let newCard = {
    front: "",
    back: "",
  };
  tempUsers[JSON.parse(localStorage.getItem("userIndex"))].collections[
    cardIndex
  ].content.push(newCard);
  localStorage.setItem("users", JSON.stringify(tempUsers));
  location.reload();
});

function LoadCards() {
  for (let x in tempCards) {
    if (
      tempCards[x].name ==
      JSON.parse(JSON.parse(localStorage.getItem("interactColl")))
    ) {
      cardIndex = x;
    }
  }
  for (let i in tempUsers[JSON.parse(localStorage.getItem("userIndex"))]
    .collections[cardIndex].content) {
    CreateCards(i);
  }
}

function CreateCards(index) {
  let div = document.createElement("div");
  div.className = "card-collection";

  div.innerHTML = `<p>` + index + `</p>`;

  document.getElementById("cards").appendChild(div);
  div.addEventListener("click", function () {
    localStorage.setItem("selectedCard", JSON.stringify(index));
    SelectedCard();
  });
}

function SelectedCard() {
  let selectedCard = JSON.parse(localStorage.getItem("selectedCard"));
  for (let i in document.getElementsByClassName("card-collection")) {
    if (i == selectedCard) {
      document.getElementsByClassName("card-collection")[
        i
      ].style.backgroundColor = "#379683";
      // set front value
      document.getElementById("front-input").value =
        tempUsers[JSON.parse(localStorage.getItem("userIndex"))].collections[
          cardIndex
        ].content[JSON.parse(localStorage.getItem("selectedCard"))].front;

      // set back value
      document.getElementById("back-input").value =
        tempUsers[JSON.parse(localStorage.getItem("userIndex"))].collections[
          cardIndex
        ].content[JSON.parse(localStorage.getItem("selectedCard"))].back;
    } else {
      document.getElementsByClassName("card-collection")[
        i
      ].style.backgroundColor = "#05386b";
    }
  }
}
// front of card editing
document.getElementById("front-input").addEventListener("input", function () {
  tempUsers[JSON.parse(localStorage.getItem("userIndex"))].collections[
    cardIndex
  ].content[
    JSON.parse(localStorage.getItem("selectedCard"))
  ].front = document.getElementById("front-input").value;
  localStorage.setItem("users", JSON.stringify(tempUsers));
});

// back of card editing

document.getElementById("back-input").addEventListener("input", function () {
  tempUsers[JSON.parse(localStorage.getItem("userIndex"))].collections[
    cardIndex
  ].content[
    JSON.parse(localStorage.getItem("selectedCard"))
  ].back = document.getElementById("back-input").value;
  localStorage.setItem("users", JSON.stringify(tempUsers));
});
