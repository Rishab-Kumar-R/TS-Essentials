# What is TypeScript? 🚀

- TypeScript is a superset of JavaScript that adds optional static typing to the language. It's a compiled language that compiles to plain JavaScript. TypeScript is designed for the development of large applications and transpiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. 📜
- TypeScript is pure object-oriented with classes, interfaces, and statically typed like C# or Java. TypeScript can be used for front-end development with frameworks like Angular, React, Vue, etc., and for back-end development with frameworks like Node.js, Deno, etc. 🌐
- TypeScript can't run directly on the browser. TypeScript code is compiled to JavaScript code via the TypeScript compiler or Babel. The TypeScript compiler is also known as the tsc compiler. The tsc compiler is a command-line tool. It can be installed via npm. 📦
- TypeScript provides error-checking feature while compiling the code. It helps to find errors at compile-time rather than at run-time. TypeScript follows the DRY (Don't Repeat Yourself) principle. It allows us to use the same code block in multiple places. 🧱

---

## Why TypeScript? 🤔

```js
// JavaScript
function add(num1, num2) {
  return num1 + num2;
}

console.log(add("5", "10")); // 🚫 unwanted behavior - returns 510
```

```ts
// TypeScript
function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add("5", "10")); // ❌ error - TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
```

---

## TypeScript Installation 🛠

```bash
# TypeScript can be installed via npm. To install TypeScript globally, use the below command.
npm install -g typescript

# To check the version of TypeScript, use the below command.
tsc -v

# To compile the TypeScript code, use the below command.
tsc filename.ts
```
