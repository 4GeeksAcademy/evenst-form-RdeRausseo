/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const form = document.getElementById("formExample");
  let error = false;

  form.addEventListener("submit", e => {
    e.preventDefault();
    let card = document.getElementById("inputCard");
    if (card.value.length < 16 || card.value.length > 20) {
      card.value = "";
      card.classList.add("bg-danger-subtle");
      error = true;
    }
    let cvc = document.getElementById("inputCvc");
    if (cvc.value.length < 3 || cvc.value.length > 4) {
      cvc.value = "";
      cvc.classList.add("bg-danger-subtle");
      error = true;
    }
    let amount = document.getElementById("inputAmount");
    if (amount.value.length == "") {
      amount.classList.add("bg-danger-subtle");
      amount.value = "";
      error = true;
    }
    let name = document.getElementById("inputFName");
    const regExp = /^[a-zA-Z\s]+$/;
    if (name.value.trim() === "" || !regExp.test(name.value.trim())) {
      name.value = "";
      name.classList.add("bg-danger-subtle");
      error = true;
    }
    let lName = document.getElementById("inputLName");
    if (lName.value.trim() === "" || !regExp.test(lName.value.trim())) {
      lName.value = "";
      lName.classList.add("bg-danger-subtle");
      error = true;
    }
    let city = document.getElementById("inputCity");
    if (city.value.trim() === "") {
      city.value = "";
      city.classList.add("bg-danger-subtle");
      error = true;
    }
    let state = document.getElementById("pickState");
    if (state.value === "") {
      state.classList.add("bg-danger-subtle");
      error = true;
    }
    let zipCode = document.getElementById("inputZC");
    if (zipCode.value == "") {
      zipCode.classList.add("bg-danger-subtle");
      error = true;
    }
    let message = document.getElementById("Message");
    if (message.value === "") {
      message.classList.add("bg-danger-subtle");
      error = true;
    }
    if (error) {
      let alert = document.querySelector(".alert");
      alert.classList.remove("d-none");
      alert.classList.add("d-block");
      alert.textContent = "Some fields are missing";
    } else e.target.submit();
  });
};
