"use strict";

// Get list of users from local storage
let users = JSON.parse(localStorage.getItem("users"));

function Login() {
  // if the input fields are not empty
  if (
    document.getElementById("username").value.trim() != "" &&
    document.getElementById("password").value.trim() != ""
  ) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let foundUser = false;
    let userIndex;
    for (let i in users) {
      if (users[i].username == username) {
        foundUser = true;
        userIndex = i;
      }
    }
    if (foundUser) {
      // if user password matches entered password
      if (
        users[userIndex].password == document.getElementById("password").value
      ) {
        localStorage.setItem("userIndex", JSON.stringify(userIndex));
        alert("nice");
      } else {
        document.getElementById("login-error-msg").innerHTML =
          "Incorrect password";
        return false;
      }
    } else {
      document.getElementById("login-error-msg").innerHTML =
        "No user with that username";
      return false;
    }
  } else {
    document.getElementById("login-error-msg").innerHTML =
      "Please enter all information";
    return false;
  }
}
