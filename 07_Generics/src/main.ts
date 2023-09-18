// Generics
// Builtin Generics
// const names: Array<string> = ["Charlie", "Jack"]; // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is resolved!");
//   }, 2000);
// });

// Generic Functions
function mergeObj<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const mergedObject = mergeObj<
  { name: string; hobbies: string[] },
  { age: number }
>({ name: "Ben", hobbies: ["Reading"] }, { age: 56 });
console.log(mergedObject.name, mergedObject.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText: string = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Reading", "Travelling"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Alex" }, "name"));

// Generic classes
class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  public addItem(item: T): void {
    this.data.push(item);
  }

  public removeItem(item: T): void {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  public getItems(): T[] {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Peter");
textStorage.addItem("Ben");
textStorage.addItem("Alex");
console.log(textStorage.getItems());
textStorage.removeItem("Peter");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(4);
numberStorage.addItem(5);
console.log(numberStorage.getItems());
numberStorage.removeItem(4);
console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>(); // Error

// Generic Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<Array<string> > = ["Grace", "Hannah"];
// names.push("Grace"); // Property 'push' does not exist on type 'readonly string[]'.

// Generic Types vs Union Types
/*
 * **Generic Types**
 * Purpose: Make code reusable with different data types.
 * Syntax: Define types with type parameters enclosed in angle brackets (<>).
 * Example: A generic function that works with various types.
 * Use Cases: Reusable data structures, generic utility functions, flexible components.
 *
 * **Union Types**
 * Purpose: Specify variables that can accept multiple specific types.
 * Syntax: Use | to separate multiple types.
 * Example: A function that accepts either strings or numbers.
 * Use Cases: Handling mixed-type data, enforcing type safety for specific cases.
 */
