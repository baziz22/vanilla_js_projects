const output = document.getElementById('output');
const reset = document.getElementById('ac');
const btn = document.querySelectorAll('.btn');
const operant = ['=', '+', '-', '*', '/'];
function clear() {}
function digitDelete() {}
function appendNumber() {}
function chooseOperation(operation) {}
function compute() {}
function updateDisplay() {}
btn.forEach(element => {
  element.addEventListener('click', k);
});

function k(j) {
  console.log(j.value);
  output.innerHTML += j.value;
}
