// typescript only helps during runtime; before code is compiled
function add(n1: number, n2: number, showResult: boolean, phase: string) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.4;

const result = add(number1, number2, true, "Test");

console.log(result);
