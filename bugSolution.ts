function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

let result:number;

try {
  result = add(5, 3);
  console.log(result); // 8
  result = subtract(10, 5);
  console.log(result); // 5
  result = multiply(4, 6);
  console.log(result); // 24
  result = divide(10, 0);
  console.log(result); // this line will not be executed
} catch (e) {
  console.error("An error occurred:", e.message);
}
console.log("Program continues execution");