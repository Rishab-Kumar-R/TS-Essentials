// Interface
interface Named {
  readonly name?: string;
  output?: string; // optional property
}

// Inheritance in interfaces
interface Greetable extends Named {
  greet(phrase: string): void;
}

// Interface as function type
/* What we used to do in type aliases
 * type AddFn = (a: number, b: number) => number;
 * let add: AddFn = (num1: number, num2: number) => num1 + num2;
 */

interface AddFnInterface {
  (a: number, b: number): number;
}

let add: AddFnInterface = (num1: number, num2: number) => num1 + num2;
console.log(add(2, 3));

// interface implementaion in a class
class Person implements Greetable {
  public name?: string;
  public age: number = 30;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  public greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable = new Person();
user1.greet("Hi there, I am");
// user1.name = "Luis"; // Error: Cannot assign to 'name' because it is a read-only property.
console.log(user1);
