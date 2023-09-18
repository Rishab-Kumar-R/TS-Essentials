/* Desc: Decorators are a special kind of declaration that can be attached to a class declaration,
    method, accessor, property, or parameter.
    Decorators use the form @expression, where expression must evaluate to a function
    that will be called at runtime with information about the decorated declaration.
*/
// Basic Decorator
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

// Decorator Factory
function FactoryLogger(logString: string) {
  console.log("LOGGING FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("RENDERING TEMPLATE");
        const hookElement = document.getElementById(hookId);
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger
@FactoryLogger("FACTORY LOGGING - PERSON")
@WithTemplate("<h1>This is Factory Decorator</h1>", "decorator__factory")
class Person {
  public name = "Aaron";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);

// Decorator for Property
function PropertyDecorator(target: any, propertyName: string | Symbol) {
  console.log("PROPERTY DECORATOR");
  console.log(target, propertyName);
}

// Accessor Decorator
function AccessorDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
): void {
  console.log("ACCESSOR DECORATOR");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Method Decorator
function MethodDecorator(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
): void {
  console.log("METHOD DECORATOR");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Parameter Decorator
function ParameterDecorator(
  target: any,
  name: string | Symbol,
  position: number
): void {
  console.log("PARAMETER DECORATOR");
  console.log(target);
  console.log(name);
  console.log(position);
}

/*
 * **When Do Decorators Execute?**
 * Decorators execute when your class is defined - not when an instance is created and not when a method is called.
 */

class Product {
  @PropertyDecorator
  public title: string;
  private _price: number;

  @AccessorDecorator
  public set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  public constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @MethodDecorator
  public getPriceWithTax(@ParameterDecorator tax: number): number {
    return this._price * (1 + tax);
  }
}

// Autobind Decorator
function AutoBindDecorator(
  _1: any,
  _2: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  public message: string = "This works!";

  @AutoBindDecorator
  public showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", printer.showMessage);

// Validation Decorator
interface ValidatorConfig {
  [properties: string]: {
    [validatableProperty: string]: Array<string>; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function CourseTitleRequired(target: any, propertyName: string): void {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [
      ...(registeredValidators[target.constructor.name]?.[propertyName] ?? []),
      "required",
    ],
  };
}
function CoursePriceIsPositive(target: any, propertyName: string): void {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [
      ...(registeredValidators[target.constructor.name]?.[propertyName] ?? []),
      "positive",
    ],
  };
}
function validateCourse(obj: any): boolean {
  const objectValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objectValidatorConfig) {
    return true;
  }
  let isValid: boolean = true;
  for (const property in objectValidatorConfig) {
    for (const validator of objectValidatorConfig[property]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[property];
          break;
        case "positive":
          isValid = isValid && obj[property] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @CourseTitleRequired
  public title: string;
  @CoursePriceIsPositive
  public price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleElement = document.getElementById("title") as HTMLInputElement;
  const priceElement = document.getElementById("price") as HTMLInputElement;

  const titleValue = titleElement.value;
  const priceValue = +priceElement.value;

  const createdCourse: Course = new Course(titleValue, priceValue);

  if (!validateCourse(createdCourse)) {
    throw new Error("Invalid input, please try again!");
  }

  console.log(createdCourse);
});
