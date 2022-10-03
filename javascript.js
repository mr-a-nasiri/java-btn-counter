let countEl = document.getElementById("count-el");
let number = 0;

let saveEl = document.getElementById("monitor-bottom-content");

function plus() {
  number += 1;
  countEl.textContent = number;
}

function save() {
  saveEl.textContent += number + " - ";
  number = 0;
  countEl.textContent = number;
}
