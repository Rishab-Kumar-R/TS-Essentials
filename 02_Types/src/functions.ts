// Function Return type and 'void'
function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(15, 2));

// Function as Types
let combinedValues: (num1: number, num2: number) => number;
combinedValues = add;
console.log(combinedValues(8, 8));
combinedValues = subtract;
console.log(combinedValues(8, 8));

// Function Types Callbacks
type Callback = (num: number) => void;

function addAndHandle(a: number, b: number, callback: Callback): void {
  const result = a + b;
  callback(result);
}
addAndHandle(10, 20, (result) => {
  console.log(result);
});
