# [Generics in TypeScript](https://www.typescriptlang.org/docs/handbook/2/generics.html) 🧬

## What is _Generics_? 🧙‍♂️

**Generics** is a feature that allows us to define classes and methods with _type parameters_. Type parameters are parameters that represent types. We can use type parameters to design classes and methods that defer the specification of one or more types until the class or method is declared and instantiated by client code. 🧩

Generics provide flexibility and reusability in our code, making it more adaptable to various data types and enhancing its robustness. It's a powerful tool in modern programming! 💪👾

---

### Built-in Generics 🏗️

TypeScript has a number of built-in generic types, such as `Array<T>`, `Promise<T>`, `ReadonlyArray<T>`, etc. These types are generic because they can hold values of any type. For example, `Array<T>` can hold values of any type `T`. We can use these types in our code to make it more flexible and reusable. 🧰

```ts
// Array<T>
const fruits: Array<string> = ["apple", "banana", "orange"]; // Array<string> === string[]
const randomNumbers: Array<string | number> = [1, "2", 3, "4"]; // Array<string | number> === (string | number)[]

// Promise<T>
const promise: Promise<string>((resolve, reject) => {
  setTimeout(() => {
    const data = "Hello World!";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data!");
    }
  })
})
```

---

### Generic Functions 🧬

We can also create our own generic functions. Generic functions are functions that have one or more type parameters. We can use type parameters to specify the types of the function's parameters and return value. This allows us to create functions that can work with a variety of data types. 🌐

```ts
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("Hello World!"); // output: Hello World!
```

---

### Working with Constraints 🧱

We can also add constraints to our type parameters. Constraints allow us to limit the types that can be used as arguments for our generic functions. This is useful when we want to restrict the types that can be used as arguments for our generic functions. ⚒️

```ts
// Generic function with constraints
function identity<T extends string>(arg: T): T {
  return arg;
}

const result = identity<string>("Hello World!"); // output: Hello World!
```

---

### The `keyof` Constraint 🗝️

We can also use the `keyof` constraint to restrict the types that can be used as arguments for our generic functions. The `keyof` constraint allows us to specify a type that is a key of a given object type. This is useful when we want to restrict the types that can be used as arguments for our generic functions. 🔐

```ts
// Generic function with keyof constraint
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const result = getProperty({ name: "John Doe" }, "name");
console.log(result); // output: John Doe
```

---

### Generic Classes and Interfaces 🏗️

We can also create our own generic classes and interfaces. Generic classes and interfaces are classes and interfaces that have one or more type parameters. We can use type parameters to specify the types of the class's properties and methods. This allows us to create classes and interfaces that can work with a variety of data types. 🪧

```ts
// Generic class
class GenericClass<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
  }
}

const genericClass = new GenericClass<string>("Hello World!");
console.log(genericClass.value); // output: Hello World!
```

```ts
// Generic interface
interface GenericInterface<T> {
  value: T;
}

const genericInterface: GenericInterface<string> = {
  value: "Hello World!",
};

console.log(genericInterface.value); // output: Hello World!
```

---

### [Generic Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) 🏗️

TypeScript has a number of built-in generic utility types, such as `Partial<T>`, `Readonly<T>`, etc. These types are generic because they can hold values of any type. We can use these types in our code to make it more flexible and reusable. 🧰

```ts
// Partial<T>
interface Person {
  name: string;
  age: number;
}

const person: Partial<Person> = {
  name: "John Doe",
  age: 30,
};

console.log(person); // output: { name: 'John Doe', age: 30 }
```

```ts
// Readonly<T>
interface Person {
  name: string;
  age: number;
}

const person: Readonly<Person> = {
  name: "John Doe",
  age: 30,
};

console.log(person); // output: { name: 'John Doe', age: 30 }
```

---

### Generic Types vs. Union Types 🤔

Generic types and union types are similar in that they both allow us to specify the types of the function's parameters and return value. However, they are different in that generic types allow us to specify the types of the function's parameters and return value at compile time, while union types allow us to specify the types of the function's parameters and return value at runtime. 🤯

```ts
// Generic type
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("Hey there!"); // output: Hey there!
```

```ts
// Union type
function identity(arg: string | number): string | number {
  return arg;
}

const result = identity("Hey there!"); // output: Hey there!
```
