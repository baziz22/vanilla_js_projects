const output = document.getElementById('output');
const reset = document.getElementById('ac');
const btn = document.querySelectorAll('.btn');
function clear() {}
function digitDelete() {}
function appendNumber() {}
function chooseOperation(operation) {}
function compute() {}
function updateDisplay() {}

function print() {
  console.log(this.value);
}
btn.forEach(element => {
  element.addEventListener('click', print, true);
});
