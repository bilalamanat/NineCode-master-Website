const currDisplay = document.querySelector(".curr-display"),
  prevDisplay = document.querySelector(".prev-display"),
  clearBtn = document.querySelector(".clear"),
  delBtn = document.querySelector(".delete"),
  equalBtn = document.querySelector(".equal"),
  numbers = document.querySelectorAll(".number"),
  operands = document.querySelectorAll(".operation");

let operation;

function appendNumber(number) {
  if (number === "." && currDisplay.innerText.includes(".")) return;
  currDisplay.innerText += number;
}

function chooseOperation(operand) {
  if (currDisplay.innerText === "") return;
  compute(operand);
  operation = operand;
  currDisplay.innerText += operand;
  prevDisplay.innerText = currDisplay.innerText;
  currDisplay.innerText = "";
}

function compute(operand) {
  let result;
  const previewValue = parseFloat(prevDisplay.innerText);
  const currentValue = parseFloat(currDisplay.innerText);

  if (isNaN(previewValue) || isNaN(currentValue)) return;
  switch (operation) {
    case "+":
      result = previewValue + currentValue;
      break;
    case "-":
      result = previewValue - currentValue;
      break;
    case "*":
      result = previewValue * currentValue;
      break;
    case "/":
      result = previewValue / currentValue;
      break;
    default:
      return;
  }
  currDisplay.innerText = result;
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    appendNumber(number.innerText);
  });
});

operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    console.log(operand.innerText);
    chooseOperation(operand.innerText);
  });
});

clearBtn.addEventListener("click", () => {
  currDisplay.innerText = "";
  prevDisplay.innerText = "";
});

delBtn.addEventListener("click", () => {
  currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});

equalBtn.addEventListener("click", () => {
  compute();
  prevDisplay.innerText = "";
});
