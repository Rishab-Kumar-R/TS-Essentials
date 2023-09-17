// let and const
const userName = "Alex";
// userName = 4334; // Error
let age = 24;

/* let and const are block scoped */

console.log(userName, age);

function add(a: number, b: number): number {
  let result: number;
  result = a + b;
  return result;
}

// Arrow functions, default parameters
const add2 = (a: number, b: number = 2): number => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add2(12));

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// Spread operator
const hobbies = ["Sports", "Cooking"];
const moreHobbies = ["Travelling", "Reading"];
const activeHobbies = ["Hiking", ...moreHobbies];
console.log(activeHobbies);
activeHobbies.push(...hobbies);
console.log(activeHobbies);

type Person = { name: string; age: number };

const person: Person = {
  name: "Alex",
  age: 24,
};

const copiedPerson: Person = { ...person };
console.log(`The copied person is ${copiedPerson.name}`);

// Rest parameters
const add3 = (...num: [number, number, number]): number => {
  return num.reduce((currResult, currValue) => currResult + currValue, 0);
};

console.log(add3(1, 3.1, 5.6));

// Array and object destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2);

const { name: firstName, age: personAge } = person;
console.log(firstName, personAge);
