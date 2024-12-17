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

let result = add(5,3);
console.log(result); //8
result = subtract(10,5);
console.log(result); //5
result = multiply(4,6);
console.log(result); //24
result = divide(10,0);
console.log(result); // throws error