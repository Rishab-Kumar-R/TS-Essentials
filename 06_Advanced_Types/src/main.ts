// Intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // Intersection Type

const employee: ElevatedEmployee = {
  name: "Adam",
  privileges: ["create-server"],
  startDate: new Date(),
};
console.log(employee);

type StrOrNum = string | number;
type NumOrBool = number | boolean;

type Universal = StrOrNum & NumOrBool; // number

// Type Guards, & Function Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: StrOrNum, b: StrOrNum): StrOrNum {
  // type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result1 = add(1, 2);
const result2 = add("Adam", "Kowalski");

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Employee name: " + emp.name);
  // type guard
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start date: " + emp.startDate);
  }
}

printEmployeeInformation(employee);

class Car {
  public drive() {
    console.log("Driving...");
  }
}

class Truck {
  public drive() {
    console.log("Driving a truck...");
  }

  public loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`);
  }
}

type Vehicle = Car | Truck;

const vehicle1 = new Car();
const vehicle2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(vehicle1);
useVehicle(vehicle2);

// Discriminated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving with speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 20 });

// Type Casting
const paragraph = <HTMLParagraphElement>(
  document.getElementById("message-output")
);
paragraph.innerText = "Hello there! This is a paragraph.";

const input = document.getElementById("user-input") as HTMLInputElement;
input.value = "Hello there!";

// Index Properties
interface ErrorContainer {
  [property: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

// Optional Chaining
const fetchedUserData = {
  id: "u1",
  name: "Adam",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

// Nullish Coalescing (for nullish & undefined values)
const userInput = "";
// const storedData = userInput || "DEFAULT"; // empty string is treated as falsy hence "DEFAULT is logged"
const storedData = userInput ?? "DEFAULT";
console.log(storedData);
