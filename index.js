const display = document.querySelector("#display");

function operatorToDisplay(input) {
  const operators = ["+", "-", "*", "/"];

  const last = display.value.slice(-1);

  if (operators.includes(last)) {
    return;
  }

  if (display.value === "ERROR" || display.value === "Infinity") {
    display.value = "";
  }

  display.value += input;
  display.scrollLeft = display.scrollWidth;
}

function appendToDisplay(input) {
  if (display.value === "ERROR" || display.value === "Infinity") {
    display.value = "";
  }

  display.value += input;
  display.scrollLeft = display.scrollWidth;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}

function del() {
  display.value = display.value.slice(0, -1);
}

function clean() {
  display.value = "";
}
