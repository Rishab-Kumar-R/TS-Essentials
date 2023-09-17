# 🔍 TS Compiler & Config

## [What is TS Compiler?](https://www.typescriptlang.org/docs/handbook/compiler-options.html) 🌟

- TypeScript Compiler is a program that converts TypeScript code into JavaScript code. It's also known as **tsc**.
- TypeScript Compiler is written in TypeScript and it is open source. 🌐
- TypeScript Compiler is a command line tool. It can be installed as a Node.js package. 📦

## [What is TS Config?](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) 📝

- TypeScript Compiler needs a configuration file to compile the TypeScript code.
- The configuration file is known as **tsconfig.json**.
- The **tsconfig.json** file contains the root files and the compiler options required to compile the project.

**NOTE**: [Debugging TypeScript Code in VS Code](https://code.visualstudio.com/docs/typescript/typescript-debugging)

```bash
# Install TypeScript Compiler
npm install -g typescript

# Check TypeScript Compiler version
tsc -v

# Create tsconfig.json file
tsc --init

# Compile TypeScript code in watch mode
tsc -w
```

## tsconfig.json - Compiler Options

```json
// some important compiler options
{
  "compilerOptions": {
    "target": "ES6", // uses ES6 features, like let, const, arrow functions, etc.
    "module": "commonjs", // uses commonjs module system
    "lib": ["ES6", "DOM", "DOM.Iterable", "ScriptHost"], // uses ES6, DOM, DOM.Iterable, ScriptHost libraries ],by default it's empty array and it's not recommended to change it unless you know what you are doing
    // "allowJs": true, // allows JavaScript files to be compiled
    // "checkJs": true, // checks JavaScript files for type errors
    "sourceMap": true, // generates source map files for debugging and development
    "outDir": "./dist", // specifies an output folder for all emitted files
    "rootDir": "./src", // specifies the root folder within your source files
    "removeComments": true, // removes comments from the compiled code
    "noEmit": true, // does not emit output files
    "noEmitOnError": true, // does not emit output files if there are any type errors
    "strict": true, // enables all strict type checking options
    "noUnusedLocals": true, // reports errors on unused local variables
    "noUnusedParameters": true, // reports errors on unused parameters
    "noImplicitReturns": true // reports errors when not all code paths in function return a value
  }
}
```
