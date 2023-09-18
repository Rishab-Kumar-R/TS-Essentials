# 🎨 [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

- Decorators are functions that can be used to modify class declarations and members. 🛠️
- Decorators are a stage 2 proposal for JavaScript and are available as an experimental feature of TypeScript. 🚧
- To enable experimental support for decorators, you must enable the `experimentalDecorators` compiler option either on the command line or in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

- Decorators use the form `@expression`, where `expression` must evaluate to a function that will be called at runtime with information about the decorated declaration. 📝
- Decorators can be attached to a class declaration, method, accessor, property, or parameter. 🏷️
- Decorators executes when the class is defined, not when the class is instantiated. 🕒

**Note:** Decorators functions are executed in the reverse order _(bottom to top)_. 📊 But Decorators are executed in the order they are defined _(top to bottom)_. 📈

- The expressions for each decorator are evaluated top-to-bottom.
- The results are then called as functions from bottom-to-top.

```ts
function logClass(target: any) {
  console.log(`Class ${target.name} is being defined.`);
}

@logClass
class MyClass {
  constructor() {
    console.log("I am in the constructor of MyClass.");
  }
}

const myClass = new MyClass();
console.log(myClass);

/* Output:
 * Class MyClass is being defined.
 * I am in the constructor of MyClass.
 * MyClass {}
 */
```

---

## 🏭 Decorator Factories

- Decorator Factories are functions that return the expression that will be called by the decorator at runtime. 🧪
- Decorator Factories are useful when you want to pass parameters to your decorator at runtime. 🧳

```ts
function logClass(message: string) {
  return function (target: any) {
    console.log(`Class ${target.name} is being defined.`);
    console.log(`Message: ${message}`);
  };
}

@logClass("Hello World!")
class MyClass {
  constructor() {
    console.log("I am in the constructor of MyClass.");
  }
}

const myClass = new MyClass();
console.log(myClass);

/* Output:
 * Class MyClass is being defined.
 * Message: Hello World!
 * I am in the constructor of MyClass.
 * MyClass {}
 */
```

---

## 🏠 Property Decorators

- Property Decorators are used to modify the behavior of a property. They are declared just before a property declaration. The decorator function is called at runtime with the following parameters:

  - `target`: The prototype of the class
  - `key`: The name of the property

- Property Decorators are executed when the class is defined, not when the class is instantiated. 🛡️

```ts
function logProperty(target: any, key: string) {
  console.log(`Property ${key} is being defined.`);
}

class MyClass {
  @logProperty
  public myProperty: string;

  constructor() {
    console.log("I am in the constructor of MyClass.");
  }
}

const myClass = new MyClass();
console.log(myClass);

/* Output:
 * Property myProperty is being defined.
 * I am in the constructor of MyClass.
 */
```

---

## 🔑 Accessor, Method and Parameter Decorators

- Accessor Decorators are used to modify the behavior of a getter or setter. They are declared just before a getter or setter declaration. The decorator function is called at runtime with the following parameters:

  - `target`: The prototype of the class
  - `key`: The name of the property
  - `descriptor`: The property descriptor of the property

- Method Decorators are used to modify the behavior of a method. They are declared just before a method declaration. The decorator function is called at runtime with the following parameters:

  - `target`: The prototype of the class
  - `key`: The name of the property
  - `descriptor`: The property descriptor of the property

- Parameter Decorators are used to modify the behavior of a parameter. They are declared just before a parameter declaration. The decorator function is called at runtime with the following parameters:

  - `target`: The prototype of the class
  - `key`: The name of the property
  - `parameterIndex`: The index of the parameter

- Accessor, Method and Parameter Decorators are executed when the class is defined, not when the class is instantiated. ⚙️

```ts
function logAccessor(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Accessor ${key} is being defined.`);
}

function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Method ${key} is being defined.`);
}

function logParameter(target: any, key: string, parameterIndex: number) {
  console.log(`Parameter ${parameterIndex} of ${key} is being defined.`);
}

class MyClass {
  @logAccessor
  public get myProperty(): string {
    return "Hello World!";
  }

  @logMethod
  public myMethod(): void {
    console.log("Hello World!");
  }

  public myParameterMethod(@logParameter myParameter: string): void {
    console.log("Hello World!");
  }

  constructor() {
    console.log("I am in the constructor of MyClass.");
  }
}

const myClass = new MyClass();
console.log(myClass);

/* Output:
 * Accessor myProperty is being defined.
 * Method myMethod is being defined.
 * Parameter 0 of myParameterMethod is being defined.
 * I am in the constructor of MyClass.
 */
```

---

### 🕒 When do decorators execute?

- Decorators are executed when the class is defined, not when the class is instantiated. 🚦
- Decorators are executed in the order they are defined _(top to bottom)_. But the decorator functions are executed in the reverse order _(bottom to top)_. 📊

---

## 🏭 Create a Decorator that Executes on Class Instantiation

- To customize the Decorator such that it executes when the class is instantiated, we need to return a function from the decorator function. 🧬
- The returned function will be called when the class is instantiated. 🚀

```ts
function logOnInstantiation<T extends { new (...args: any[]) }>(
  constructor: T
) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      console.log(`Object of class ${constructor.name} is created.`);
    }
  };
}

@logOnInstantiation
class MyClass {
  constructor() {
    console.log("MyClass constructor called.");
  }
}

const myInstance = new MyClass();

/*
 * Output:
 * MyClass constructor called.
 * Object of class MyClass is created.
 */
```

---

## 🤖 Autobind Decorator

- The Autobind Decorator binds the `this` keyword to the class instance. 🔄
- The Autobind Decorator is useful when you want to pass a method as a callback function. 🤝

```ts
function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const updatedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      // Bind the original method to the class instance and return it
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return updatedDescriptor;
}

class MyClass {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  @AutoBind
  greet() {
    console.log(`Hello, ${this._name}!`);
  }
}

const myObject = new MyClass("John");
const greetFn = myObject.greet;

// Calling greetFn without binding would result in an error, but the decorator takes care of it.
greetFn(); // Output: "Hello, John!"
```

---

## 🧪 Validation Decorator

- The Validation Decorator ensures the security and integrity of method inputs. ✅
- It becomes essential when safeguarding method inputs is a priority. 🧾

```ts
// Validation Decorator for String Length
function ValidateStringLength(minLength: number, maxLength: number) {
  return function (target: any, propertyKey: string) {
    let value: string = target[propertyKey];

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      if (newValue.length < minLength || newValue.length > maxLength) {
        throw new Error(
          `Length of ${propertyKey} must be between ${minLength} and ${maxLength}.`
        );
      }
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

function ValidateNumericRange(minValue: number, maxValue: number) {
  return function (target: any, propertyKey: string) {
    let value: number = target[propertyKey];

    const getter = function () {
      return value;
    };

    const setter = function (newValue: number) {
      if (newValue < minLength || newValue > maxLength) {
        throw new Error(
          `Value of ${propertyKey} must be between ${minValue} and ${maxValue}.`
        );
      }
      value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

class User {
  @ValidateStringLength(3, 20)
  name: string;

  @ValidateNumericRange(10, 100)
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("John Doe", 30);

try {
  user.name = "J"; // Error: Length of name must be between 3 and 20.
  user.age = 5; // Error: Value of age must be between 10 and 100.
} catch (error: any) {
  console.error(error.message);
}
```
