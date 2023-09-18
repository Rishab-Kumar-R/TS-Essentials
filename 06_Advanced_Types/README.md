# [Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html) 🛠️

## Intersection Types 🚧

An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. 💼

To define an intersection type, we list the multiple types separated by `&`:

```ts
type Printable = {
  print: () => void;
};

type Loggable = {
  log: () => void;
};

const loggerAndPrinter: Printable & Loggable = {
  print: () => {
    console.log("Printing...");
  },
  log: () => {
    console.log("Logging...");
  },
};

// Call methods on the object
loggerAndPrinter.print(); // Output: Printing...
loggerAndPrinter.log(); // Output: Logging...
```

---

## Type Guards 🛡️

Type guards are expressions that perform runtime checks that guarantee the type in some scope. To define a type guard, we simply need to define a function whose return type is a type predicate:

```ts
type Animal = { name: string } | { species: string };

function hasName(obj: any): obj is { name: string } {
  return "name" in obj;
}

const dog: Animal = { name: "Buddy" };
const cat: Animal = { species: "Siamese" };

console.log(
  hasName(dog)
    ? `${dog.name} is a named animal.`
    : `${dog.name} is not a named animal.`
); // Output: Buddy is a named animal.
console.log(
  hasName(cat)
    ? `${cat.species} is a named animal.`
    : `${cat.species} is not a named animal.`
); // Output: Siamese is not a named animal.
```

---

## Discriminated Unions 🧩

A discriminated union, also called tagged union, is a union type whose variants are identified by a **discriminant** property. 🏛️

```ts
type Circle = { kind: "circle"; radius: number };
type Rectangle = { kind: "rectangle"; width: number; height: number };

type Shape = Circle | Rectangle;

function calculateArea(shape: Shape): number {
  if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
  return shape.width * shape.height;
}

const circle: circle = { kind: "circle", radius: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 4, height: 3 };

console.log(`Circle area: ${calculateArea(circle)}`);
console.log(`Rectangle area: ${calculateArea(rectangle)}`);
```

---

## Type Casting 🔍

Type casting is a way to tell the compiler _“trust me, I know what I’m doing.”_ A type cast is like a type assertion in other languages, but it performs no special checking or restructuring of data. It has no runtime impact and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need. 🎭

```ts
const input = document.getElementById("input") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;

input.value = "Hello World!";

button.addEventListener("click", () => {
  console.log(input.value); // Output: Hello World!
});
```

---

## Index Types 🗃️

Index types allow us to create objects that are more flexible regarding the properties they might hold. Index types are a powerful way to describe the _“dictionary”_ pattern, also known as _“bag of properties”_. 📊

```ts
type FruitBasket = { [key: string]: number };

const basket: FruitBasket = { apple: 5, banana: 3, orange: 2 };
console.log(`Apples: ${basket["apple"]}`);

// Add more fruits
basket["grape"] = 4;

// Log the updated basket
for (const fruit in basket) console.log(`${fruit}: ${basket[fruit]}`); // Output: apple: 5, banana: 3, orange: 2, grape: 4
```

---

## Function Overloads 🎯

Function overloads are a way to define multiple function signatures for the same function. This is useful when we want to provide different function implementations based on the number or types of arguments. 🔄

```ts
function greet(name: string): string;
function greet(name: string, age: number): string;

function greet(name: string, age?: number): string {
  if (age === undefined) {
    return `Hello, ${name}!`;
  } else {
    return `Hello, ${name}! You are ${age} years old.`;
  }
}

const message1 = greet("Alice");
const message2 = greet("Bob", 25);

console.log(message1); // Output: Hello, Alice!
console.log(message2); // Output: Hello, Bob! You are 25 years old.
```

---

## Optional Chaining 🔗

Optional chaining is a feature that allows you to access deeply nested properties without worrying if the property exists or not. If the property is undefined or null, the expression will return undefined. 🌐

```ts
const user = {
  name: "Alice",
  address: {
    street: "Main Street",
    city: "London",
  },
};

console.log(user.address?.street); // Output: Main Street
console.log(user.address?.country); // Output: undefined
```

---

## Nullish Coalescing 🛡️

Nullish coalescing is a feature that allows you to specify a default value for variables that may be null or undefined. It is similar to the logical OR operator, but it only returns the right operand if the left operand is null or undefined. 🎯

```ts
const userInput = null;
const defaultValue = "Default Value";

// Using nullish coalescing to provide a default value
const value = userInput ?? defaultValue;

console.log(`Value: ${value}`);
```
