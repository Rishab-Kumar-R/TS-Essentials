function add(
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
): number {
  // if (typeof num1 !== "number" || typeof num2 !== "number") {
  //   throw new Error("Incorrect input!");
  // }
  const result: number = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  }
  return num1 + num2;
}

const num1: number = 1.8;
const num2: number = 2.8;
const printResult: boolean = true;
const resultPhrase: string = "Result is: ";

add(num1, num2, printResult, resultPhrase);
