"use strict";

let collToEdit = JSON.parse(localStorage.getItem("interactColl"));
let tempUsers = JSON.parse(localStorage.getItem("users"));
let tempCards = tempUsers[JSON.parse("userIndex")].collections;
let cards = new Array();

for (let i in cards) {
  if (tempCards[i].name == JSON.parse(localStorage.getItem("interactColl"))) {
    cards = tempCards[i];
  }
}

document.getElementById("add-card").addEventListener("click", function () {
  let newCard = {
    front: "",
    back: "",
  };
  cards.push(newCard);
  localStorage.setItem(cards);
  alert("test");
});
