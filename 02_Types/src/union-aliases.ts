// union, literal types, type aliases
type NumOrStr = string | number;
function add(
  num1: NumOrStr,
  num2: NumOrStr,
  resultConversion: "as-number" | "as-text"
): NumOrStr {
  let result: NumOrStr;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    return num1.toString() + num2.toString();
  }
  return result;
}

const combinedNums = add(5, 10, "as-number");
console.log(combinedNums); // 15

const combinedNamesNums = add("1", "13", "as-number");
console.log(combinedNamesNums); // 14

const combinedNames = add("Alex", "B", "as-text");
console.log(combinedNames); // AlexB

type User = { name: string; age: number };

const user1: User = { name: "Alex", age: 30 };

function greet(user: User) {
  console.log(`Hi, I am ${user.name}`);
}
greet(user1); // Hi, I am Alex

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
console.log(isOlder(user1, 20)); // false
