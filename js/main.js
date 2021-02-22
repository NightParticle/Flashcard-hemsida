"use strict";

let users = new Array();
//document.getElementById("create").addEventListener("click", createAccount);

function CreateAccount() {
  // if all the input fields are filled in
  if (
    document.getElementById("create-username").value.trim() != "" &&
    document.getElementById("create-password").value.trim() != "" &&
    document.getElementById("confirm-password").value.trim() != ""
  ) {
    // if the values of password and confirm passowrd mathces
    if (
      document.getElementById("create-password").value ==
      document.getElementById("confirm-password").value
    ) {
      let newUser = {
        username: document.getElementById("create-username").value,
        password: document.getElementById("create-password").value,
        collections: new Array(),
      };
      if (JSON.parse(localStorage.getItem("users")) != null) {
        users = JSON.parse(localStorage.getItem("users"));
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
      }
    } else {
      document.getElementById("create-error-msg").innerHTML =
        "Passwords do not match";

      return false;
    }
  } else {
    document.getElementById("create-error-msg").innerHTML =
      "Please fill in all fields";

    return false;
  }
}
