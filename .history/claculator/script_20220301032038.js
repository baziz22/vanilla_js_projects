const output = document.getElementById('output');
const total = document.getElementById('total');
const reset = document.getElementById('ac');
const btn = document.querySelectorAll('.btn');
const operants = ['=', '+', '-', '*', '/'];
const equalOperation = '=';
function clear() {}
function digitDelete() {}
function appendNumber() {}
function chooseOperation(operation) {}
function compute() {}
function updateDisplay() {}
btn.forEach(element => {
  element.addEventListener('click', () => {
    let digits = [];
    let saveOperants = [];
    let saveDigits = [];
    let outputContents = '';

    console.log(element.value);
    if (element.value !== equalOperation) {
      digits.push(element.value);
      let g = operantValue(digits, operants);
      console.log('g: ', g);
      //console.log('digits: ', digits);
      output.innerHTML += digits;
      if (element.value !== g) {
        outputContents += output.textContent;
        console.log('outputcontents:', outputContents);
      }
      if (element.value === g) {
        Number(outputContents);
        console.log('Converted outputcontents:', outputContents);
        saveDigits[0] = outputContents;
        console.log('2. OutputContents: ', outputContents);
        console.log('saveDigits: ', saveDigits);
        //reset outputContent
        outputContents = '';
        saveOperants.push();
        console.log('saveOperants: ', saveOperants);
        //operantValue(digits, operants);
      }
    } else {
      compute();
    }
  });
});

const operantValue = function (arg, operant) {
  let theOperant = '';
  //console.log('args: ', arg);
  operant.forEach((element, i) => {
    //console.log(i + '. ' + element);
    //console.log('opernat: ', operant);
    if (operant[i] === arg[0]) {
      console.log('this is the operant', operant[i]);
      theOperant = operant[i];
    }
  });
  return theOperant;
};
