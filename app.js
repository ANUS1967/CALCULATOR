alert("THANKS FOR VISITING MUHAMMAD ANUS WEB PAGE ");


let display = document.getElementById('display');

function show(num) {
  display.value += num; // ✅ CORRECT
}

function calculateResult() {
  try {
    display.value = eval(display.value); // ✅ Use .value, not .innerText
  } catch {
    display.value = 'Error';
  }
}

function ac() {
  display.value = '';
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}




















