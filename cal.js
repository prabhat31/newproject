const display = document.getElementById("display");
    let currentValue = "0";
    let prevValue = "";
    let operator = "";


    function updateDisplay() {
      display.textContent = currentValue;
    }

  
    function clear() {
      currentValue = "0";
      prevValue = "";
      operator = "";
      updateDisplay();
    }

   
    function handleNumberClick(number) {
      if (currentValue === "0") {
        currentValue = number;
      } else {
        currentValue += number;
      }
      updateDisplay();
    }

    
    function handleOperatorClick(op) {
      if (prevValue !== "") {
        calculate();
      }
      prevValue = currentValue;
      operator = op;
      currentValue = "0";
    }


    function calculate() {
      const num1 = parseFloat(prevValue);
      const num2 = parseFloat(currentValue);
      switch (operator) {
        case "+":
          currentValue = (num1 + num2).toString();
          break;
        case "-":
          currentValue = (num1 - num2).toString();
          break;
        case "*":
          currentValue = (num1 * num2).toString();
          break;
        case "/":
          currentValue = (num1 / num2).toString();
          break;
        default:
          break;
      }
      updateDisplay();
      prevValue = "";
      operator = "";
    }

 
    document.getElementById("clear").addEventListener("click", clear);

    
    document.getElementById("backspace").addEventListener("click", function () {
      if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
      } else {
        currentValue = "0";
      }
      updateDisplay();
    });