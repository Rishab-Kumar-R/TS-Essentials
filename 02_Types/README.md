# [Core Types in TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) 🧱

TypeScript, a statically-typed superset of JavaScript, includes several core data types that are similar to those in JavaScript. These core types help developers define the type of values that variables can hold and provide better type checking during development.

## Number 🔢

The `number` type in TypeScript is used to represent both integer and floating-point numbers, just like in JavaScript.

```ts
const num1: number = 5;
const num2: number = 2.8;
```

---

## String 📝

The `string` type in TypeScript represents textual data. You can define strings using single quotes, double quotes, or template literals, which allow for variable interpolation.

```ts
const userName: string = "John Doe";
const welcomeMessage: string = `Welcome, ${userName}!`;
```

---

## Boolean ✅

The `boolean` type in TypeScript represents a binary choice, such as `true` or `false`, just like in JavaScript.

```ts
const isTrue: boolean = true;
const isFalse: boolean = false;
```

---

🚀 **NOTE**: TypeScript has a built-in feature called [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html) that automatically assigns a type to a variable based on its value. For example, TypeScript will infer the `number` type for a variable that is assigned a numeric value, the `string` type for a variable that is assigned a string value, and so on. Therefore, you don't always need to explicitly specify the type of a variable.

This type inference feature makes TypeScript development more interactive and less verbose, as you can rely on TypeScript to understand the types based on your code.

---

## Objects 🧩

Objects are a fundamental data structure in TypeScript that allow you to group related data and functions together. They are similar to objects in JavaScript but can have a specific shape defined by TypeScript, making them more powerful for static type checking.

### Object Literal 📦

In TypeScript, you can define objects using object literals. An object literal is a comma-separated list of key-value pairs enclosed in curly braces `{}`.

```ts
const person: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};
```

---

## Arrays 📦

Arrays are a fundamental data structure in TypeScript that allow you to store and manipulate collections of values. TypeScript provides strong type checking for arrays, making it easier to work with structured data.

### Array Declaration 📄

In TypeScript, you can declare an array by specifying the type of elements it contains and using square brackets `[]`.

```ts
const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: string[] = ["apple", "banana", "cherry"];
```

---

## Tuples 📊

Tuples are a specialized data structure in TypeScript that allow you to create arrays with fixed, known-length and ordered elements. Unlike arrays, tuples provide type checking for each element at specific positions.

### Tuple Declaration 📜

In TypeScript, you can declare a tuple by specifying the types of its elements within square brackets `[]`.

```ts
const person: [string, number] = ["Alice", 30];
const coordinates: [number, number] = [10, 20];
```

---

## Enums 📑

Enums are a data type in TypeScript that allow you to define a set of named constants. Enums are useful when you have a small set of values that are known at compile time, such as days of the week, months of the year, or colors.

### Enum Declaration 📜

In TypeScript, you can declare an enum using the `enum` keyword.

```ts
enum Color {
  Red,
  Green,
  Blue,
}
```

---

## Any 🤷‍♂️

The `any` type in TypeScript represents any type. It is useful when you don't want to specify the type of a variable at the time of declaration or when you want to assign a value of unknown type to a variable. Avoid using the `any` type as much as possible, as it defeats the purpose of using TypeScript.

```ts
let value: any = 5;
value = "foo";
value = true;
```

---

## Union 🤝

The `union` type in TypeScript allows you to combine two or more data types into one. It is useful when you want a variable to be able to store values of different types.

```ts
let value: string | number = "foo";
value = 5;
```

---

## Literal Types 📜

Literal types are a special kind of data type in TypeScript that represent values that are exact, concrete values. Literal types are useful when you want to restrict a variable to a single value.

### String Literal Types 📝

In TypeScript, you can use string literal types to specify the exact value a string can have.

```ts
let value: "foo" | "bar" | "baz";
value = "foo";
value = "bar";
value = "baz";
```

### Numeric Literal Types 🔢

In TypeScript, you can use numeric literal types to specify the exact value a number can have.

```ts
let value: 1 | 2 | 3;
value = 1;
value = 2;
value = 3;
```

---

## Type Aliases 📝

Type aliases are a feature in TypeScript that allow you to create a new name for an existing type. Type aliases are useful when you want to refer to a type by a different name.

### Type Alias Declaration 📄

In TypeScript, you can declare a type alias using the `type` keyword.

```ts
type Person = {
  name: string;
  age: number;
};

type Coordinates = [number, number];

type Color = "Red" | "Green" | "Blue";
```

---

## Functions Return Types and Functions As Types 📝

Functions are a fundamental data structure in TypeScript that allow you to define reusable blocks of code. TypeScript provides strong type checking for functions, making it easier to work with structured data.

### Function Return Types 📄

```ts
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

### Function As Types 📄

```ts
type MathOperation = (num1: number, num2: number) => number;

const add: MathOperation = (num1, num2) => num1 + num2;
const subtract: MathOperation = (num1, num2) => num1 - num2;
const multiply: MathOperation = (num1, num2) => num1 * num2;

console.log(add(5, 2));
console.log(subtract(5, 2));
console.log(multiply(5, 2));
```

### Function Types Callbacks 📄

```ts
type CallbackFunction = (num: number) => void;

function performOperation(x: number, y: number, callback: CallbackFunction) {
  const result = x + y;
  callback(result);
}
```

---

## Unknown 🤷‍♂️

The `unknown` type in TypeScript represents any type. It is similar to the `any` type, but is safer because it prevents you from using the value of an `unknown` type without first checking its type.

```ts
let value: unknown = 5;
value = "foo";
value = true;

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

## Never 🚫

The `never` type in TypeScript represents the type of values that never occur. It is useful when you want to explicitly specify that a function never returns or a variable never holds a value.

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```
