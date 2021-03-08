"use strict";

let collToView = JSON.parse(JSON.parse(localStorage.getItem("interactColl")));
let tempUsers = JSON.parse(localStorage.getItem("users"));
let tempCards =
  tempUsers[JSON.parse(localStorage.getItem("userIndex"))].collections;
let cardIndex = 0;
let contentToView;
let isFront = true;
let cardNumber = 0;
let numberOfCards = 0;

for (let i in tempCards) {
  if (tempCards[i].name == collToView) {
    cardIndex = i;
  }
}

for (let i in tempCards[cardIndex].content) {
  numberOfCards++;
}
changeCard(isFront, cardNumber);

function changeCard(isFront, index) {
  let title = document.getElementById("p-side");
  let card = document.getElementById("content");

  if (isFront) {
    title.innerHTML = "Front";
    let content = "";
    if (tempCards[cardIndex].content != "") {
      content = tempCards[cardIndex].content[index].front;
    }
    card.innerHTML = content;
  } else {
    title.innerHTML = "Back";
    let content = "";
    if (tempCards[cardIndex].content != "") {
      content = tempCards[cardIndex].content[index].back;
    }
    card.innerHTML = content;
  }
}

function TurnCard() {
  isFront = !isFront;
  changeCard(isFront, cardNumber);
}

function NextCard() {
  cardNumber++;
  if (cardNumber <= numberOfCards - 1) {
    isFront = true;
    changeCard(isFront, cardNumber);
  } else {
    document.getElementById("turn").remove();
    document.getElementById("next").remove();
    document.getElementById("p-side").innerHTML =
      "Congratulations!<br>You completed the collection";
    document.getElementById("content").remove();
  }
}
