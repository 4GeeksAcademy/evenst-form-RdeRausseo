/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const form = document.getElementById("formExample");
  let flag = true;

  form.addEventListener("submit", e => {
    e.preventDefault();
    let card = document.getElementById("inputCard");
    if (card.value.length < 16 || card.value.length > 20) {
      card.classList.add("bg-danger-subtle");
      flag = false;
    }
    let cvc = document.getElementById("inputCvc");
    if (cvc.value.length < 3 || cvc.value.length > 4) {
      cvc.classList.add("bg-danger-subtle");
      flag = false;
    }
    let amount = document.getElementById("inputAmount");
    if (amount.value.length == "") {
      amount.classList.add("bg-danger-subtle");
    }
    let name = document.getElementById("inputName");
    let testname = new RegExp("");
    if (name.value )
    let lastName = document.getElementById("inputLastName");
    if (flag) e.target.submit();
  });
};

/* if (e.cancelable) {
    if (document.getElementById("inputCard").value.length < 10) {
    inputmoment = document
      .getElementById("inputCard")
      .classList.add("bg-danger-subtle");
  }
} */
