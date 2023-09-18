# Classes and Interfaces

## What is Object Oriented Programming? 🧩

Object Oriented Programming (OOP) is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects. There are many object-oriented programming languages including JavaScript, TypeScript, C++, Java, and Python.

### [What is a Class?](https://www.typescriptlang.org/docs/handbook/2/classes.html) 🏗️

A class is a user-defined blueprint or prototype from which objects are created. It represents the set of properties or methods that are common to all objects of one type. In general, classes can include the following:

- Data Members: These are the class variables that store the object state.
- Member Functions: These are the class methods that define the behavior of the objects.

![Class cheatsheet](https://www.typescriptlang.org/static/TypeScript%20Classes-83cc6f8e42ba2002d5e2c04221fa78f9.png)

### What is an Object? 🧑‍🚀

An object is a self-contained component which consists of methods and properties to make a particular type of data useful. Object determines the behavior of the class. When you send a message to an object, you are asking the object to invoke or execute one of its methods.

```ts
// Define a class
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old!`
    );
  }
}

// Create an instance of the class (object)
const person = new Person("John", 30);
person.greet();
```

---

### Access Modifiers 🔐

Access modifiers are keywords that set the accessibility of properties and methods in a class. There are three access modifiers in TypeScript:

- **public** - members are accessible from outside the class
- **protected** - members are accessible within the class and its subclasses
- **private** - members are accessible within the class only
- **readonly** - members can be read but not changed

```ts
class Person {
  public name: string;
  private age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  private getAge() {
    return this.age;
  }

  protected showAddress() {
    console.log(`I live at ${this.address}.`);
  }
}

const person = new Person("John", 30, "123 Main St.");
person.greet(); // Hello, my name is John.
person.getAge(); // Property 'getAge' is private and only accessible within class 'Person'.
person.showAddress(); // Property 'showAddress' is protected and only accessible within class 'Person' and its subclasses.
```

---

### Inheritance 🧬

Inheritance is a mechanism in which one class acquires the property of another class. It supports the concept of hierarchical classification. It is a mechanism for code reuse and to allow independent extensions of the original software via public classes and interfaces.

```ts
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old!`
    );
  }
}

class Employee extends Person {
  salary: number;
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
  // Override the greet method
  // Overriding is the ability of a class to change the implementation of a method provided by one of its ancestors.
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old!`
    );
  }
  pay() {
    console.log(`I make $${this.salary} a year.`);
  }
}

const employee = new Employee("John", 30, 50000);
employee.greet(); // Hello, my name is John and I am 30 years old!
employee.pay(); // I make $50000 a year.
```

---

### Getters and Setters 🛠️

Getters and setters are special methods that are used to get and set the values of an object's data. They are most often used in classes. Getters are used to return the value of an object's private variable to the user without the user directly accessing the private variable. Setters are used to change the value of an object's private variable based on the value passed into the setter function.

```ts
class Person {
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  get age() {
    return this._age;
  }
  set age(age: number) {
    this._age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this._name} and I am ${this._age} years old!`
    );
  }
}

const person = new Person("John", 30);
person.greet(); // Hello, my name is John and I am 30 years old!
person.name = "Jane";
person.age = 25;
person.greet(); // Hello, my name is Jane and I am 25 years old!
```

---

### Static methods and properties 🧱

Static methods and properties are shared by all instances of a class. They are accessed using the class name instead of an instance name. A static member cannot be accessed with an instance of the class. Instead, it is accessed directly via the class name.

```ts
class MathUtility {
  static PI: number = 3.14159;

  static calculateCircleArea(radius: number): number {
    return MathUtility.PI * radius * radius;
  }

  static calculateSquareArea(sideLength: number): number {
    return sideLength * sideLength;
  }
}

console.log(`The value of PI is: ${MathUtility.PI}`);

const circleArea = MathUtility.calculateCircleArea(5);
console.log(`The area of a circle with radius 5 is: ${circleArea}`); // The area of a circle with radius 5 is: 78.53975

const squareArea = MathUtility.calculateSquareArea(4);
console.log(`The area of a square with side length 4 is: ${squareArea}`); // The area of a square with side length 4 is: 16
```

---

### Abstract classes 🎨

Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members. The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.

```ts
abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} barks!`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} meows!`);
  }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.makeSound(); // Output: Buddy barks!
cat.makeSound(); // Output: Whiskers meows!
```

---

### Singleton and Private Constructors 🏠

A Singleton is a design pattern that ensures a class has only one instance. It provides a way to access this instance globally. This is useful when you want to share a single resource, like a database connection or configuration manager, among multiple parts of your application to save resources.

Private constructors prevent external instances of the class. Instead, a static method checks if an instance already exists and returns it. If not, it creates and stores a new instance. This way, you always get the same instance, ensuring there's only one.

```ts
class Singleton {
  private static instance: Singleton | null = null;

  private constructor() {
    // Private constructor to prevent external instantiation
  }

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  showMessage(): void {
    console.log("This is a Singleton instance");
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true

singleton1.showMessage();
singleton2.showMessage();
```

---

## [Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html) 📝

Interfaces are used to define the structure of an object. They are like a blueprint that can be used to create objects. An interface can be used to define the syntax that any entity must adhere to. Interfaces are a powerful way to define contracts within your code as well as contracts with code outside of your project.

**NOTE**: Interfaces are purely a TypeScript construct. They are not part of the JavaScript language. So when TypeScript code is compiled to JavaScript, interfaces are removed.

```ts
interface Product {
  name: string;
  price: number;
}

const product: Product = {
  name: "Laptop",
  price: 999.99,
};

function displayProduct(product: Product): void {
  console.log(`Product: ${product.name}, Price: $${product.price}`);
}

displayProduct(product); // Output: Product: Laptop, Price: $999.99
```

![Interface cheatsheet](https://www.typescriptlang.org/static/TypeScript%20Interfaces-34f1ad12132fb463bd1dfe5b85c5b2e6.png)
