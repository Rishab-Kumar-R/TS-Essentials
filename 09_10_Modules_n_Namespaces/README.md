# Modules and Namespaces 📦

## Namespaces in TypeScript 📁

In TypeScript, namespaces are used to logically organize your code and prevent name collisions. They are also referred to as internal modules. You can say that a namespace is a group of related functionalities. A problem can occur when you use namespaces, the error is produced at runtime. To avoid this problem, you can use modules.

🌐 **Declaring Namespaces:** Namespaces are declared using the `namespace` keyword.

```typescript
// file: namespace.ts
namespace App {
  export class Car {
    engine: string;
    constructor(engine: string) {
      this.engine = engine;
    }
    disp(): void {
      console.log("Engine is  :   " + this.engine);
    }
  }
}
```

- 🌟 You can use the namespace in another namespace or module using the `import` keyword.

```typescript
// file: main.ts
/// <reference path = "namespace.ts" />

namespace App {
  export class SportsCar extends Car {
    turbo: boolean;
    constructor(engine: string, turbo: boolean) {
      super(engine);
      this.turbo = turbo;
    }
    disp(): void {
      super.disp();
      console.log("Turbo is  :   " + this.turbo);
    }
  }
}

let car = new App.SportsCar("V8", true);
car.disp();

// Output:
// Engine is  :   V8
// Turbo is  :   true
```

## Modules in TypeScript 📁

Instead of writing all the code in a single file, we can split the code into multiple files. Each file acts as a module and can be imported or exported using the `import` or `export` keyword.

- You can export a module using the 📤 export keyword.

```typescript
// file: module.ts
export interface IEmployee {
  empCode: number;
  empName: string;
  getSalary: (number) => number;
}
```

- You can import the module in another module using the 📥 import keyword.

```typescript
// file: main.ts
import { IEmployee } from "./module";

let emp: IEmployee = {
  empCode: 1,
  empName: "Steve",
  getSalary: (days: number): number => {
    return days * 500;
  },
};
```

## How Does Code In A Module Execute? 🤔

- When you import a module, TypeScript creates a 🌐 namespace for that module.
- The code within the module is executed only once, when it is imported even if you import it multiple times. 🔄
- The variables, functions, classes, etc. declared in the module are not visible outside the module unless you explicitly export them using the 🚀 export keyword.
