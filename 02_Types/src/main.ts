// unknown type
let userInput: unknown;
let userName: string;

userInput = 5; // No error
userInput = "Peter"; // No error
// userName = userInput; // Type 'unknown' is not assignable to type 'string'.
if (typeof userInput === "string") {
  userName = userInput; // No error
}

// never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
