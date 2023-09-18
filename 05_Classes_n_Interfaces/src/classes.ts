// class
// Note: abstract class cannot be instantiated
abstract class Department {
  static fiscalYear = 2023;
  // private readonly _id: string;
  // private _name: string;
  protected _employees: string[] = [];

  // short-hand notation for declaring and initializing properties
  constructor(protected readonly id: string, public name: string) {}

  // static method
  static createEmployee(name: string) {
    return { name: name };
  }

  // abstract method
  public abstract describe(this: Department): void;

  public addEmployee(employee: string): void {
    // this._id = "a2"  // this is not possible because _id is readonly
    this._employees.push(employee);
  }

  public printEmployeeInformation() {
    console.log(`The number of employees are: ${this._employees.length}`);
    console.log(this._employees);
  }
}

// Inheritance
class ITDepartment extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  public describe(this: ITDepartment): void {
    console.log(`IT Department - ID (${this.id})`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  // getter
  public get mostRecentReport(): string {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  // setter
  public set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  public static getInstance(): AccountingDepartment {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("a1", []);
    return this.instance;
  }

  // Override
  public addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this._employees.push(employee);
  }
  public describe(this: AccountingDepartment): void {
    console.log(`Accounting Department - ID (${this.id})`);
  }

  public addReport(text: string): void {
    this.reports.push(text);
    this.lastReport = text;
  }

  public printReports(): void {
    console.log(this.reports);
  }
}

// access static method
const employee = Department.createEmployee("Test");
console.log(employee, Department.fiscalYear);

const it = new ITDepartment("a2", ["Ben", "David"]);
it.addEmployee("Pete");
it.addEmployee("Anna");
it.describe();
it.printEmployeeInformation();
console.log(it);

// Object
// const accounting = new AccountingDepartment("a1", []); // this is not possible because constructor is private
const accounting = AccountingDepartment.getInstance(); // Singleton pattern
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.addEmployee("Ben");
accounting.addEmployee("Pete");
accounting.addEmployee("Max");
accounting.addEmployee("Anna");
accounting.describe();
// console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
// accounting.printEmployeeInformation();
// accounting.printReports();

// const accountingCopy = { _name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

// accounting._employees[2] = "Anna"; // this is possible because _employees is private
