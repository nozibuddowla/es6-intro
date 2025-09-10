# 1. What is the difference between var, let, and const?

## 🔑 Differences Between `var`, `let`, and `const`

### 1. **Scope**

* **`var`** → **Function scope**
  Declared variables are visible anywhere inside the function.
  Example:

  ```js
  function test() {
      if (true) {
          var x = 10;
      }
      console.log(x); // ✅ Works (function-scoped)
  }
  ```
* **`let` and `const`** → **Block scope**
  Variables exist only within the `{}` block.

  ```js
  function test() {
      if (true) {
          let y = 20;
          const z = 30;
      }
      console.log(y); // ❌ ReferenceError
      console.log(z); // ❌ ReferenceError
  }
  ```

---

### 2. **Hoisting**

* **`var`** is **hoisted** to the top of its scope and initialized with `undefined`.

  ```js
  console.log(a); // undefined (hoisted)
  var a = 5;
  ```
* **`let` and `const`** are also hoisted but placed in the **Temporal Dead Zone (TDZ)** until the declaration line. Accessing them before declaration throws an error.

  ```js
  console.log(b); // ❌ ReferenceError (TDZ)
  let b = 10;
  ```

---

### 3. **Reassignment**

* **`var`** → can be reassigned.
* **`let`** → can be reassigned.
* **`const`** → cannot be reassigned.

  ```js
  var x = 1;
  x = 2; // ✅

  let y = 3;
  y = 4; // ✅

  const z = 5;
  z = 6; // ❌ TypeError
  ```

⚠️ Important: For `const` with objects/arrays, you can still **mutate properties**:

```js
const arr = [1, 2];
arr.push(3); // ✅ Allowed
arr = [4, 5]; // ❌ Error
```

---

### 4. **Redeclaration**

* **`var`** → can be redeclared in the same scope (not safe).

  ```js
  var a = 1;
  var a = 2; // ✅ Works
  ```
* **`let` and `const`** → cannot be redeclared in the same scope.

  ```js
  let b = 3;
  let b = 4; // ❌ Error

  const c = 5;
  const c = 6; // ❌ Error
  ```

---

## ✅ Quick Summary

| Feature       | `var`                 | `let`                                   | `const`                                 |
| ------------- | --------------------- | --------------------------------------- | --------------------------------------- |
| **Scope**     | Function-scoped       | Block-scoped                            | Block-scoped                            |
| **Hoisting**  | Hoisted → `undefined` | Hoisted → TDZ (error if accessed early) | Hoisted → TDZ (error if accessed early) |
| **Reassign**  | ✅ Allowed             | ✅ Allowed                               | ❌ Not allowed                           |
| **Redeclare** | ✅ Allowed             | ❌ Not allowed                           | ❌ Not allowed                           |

---


# 2. What are arrow functions, and how are they different from normal functions?

Arrow functions in JavaScript are a concise way to write functions with a shorter syntax compared to normal functions. Here are the key differences:

1. **`Shorter Syntax`**:
Arrow functions use a compact syntax without the function keyword. For example:

  ```js
const add = (a, b) => a + b;
  ```

instead of

```js
function add(a, b) {
  return a + b;
}
```

2. **`No Own `this` `**:
Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding (lexical) scope. This makes them useful for preserving the context inside callbacks.

3. **`No `arguments` Object`**:
Arrow functions do not have their own `arguments` object. If you need to access the arguments, you must use rest parameters (`...args`) or rely on the outer scope's arguments.

4. **`Not Hoisted`**:
Unlike normal function declarations, arrow functions assigned to variables are not hoisted. You cannot call them before their definition.

5. **`Cannot be Used as Constructors`**:
Arrow functions cannot be used with the `new` keyword and do not have a `prototype` property, so they cannot serve as constructors.


# 3. What are template literals?
Template literals use backticks (`) instead of single or double quotes and support string interpolation and multi-line strings.

1. **`Backticks`**: (`Template literals are enclosed in backticks`) rather than single quotes (') or double quotes ("). This syntax distinguishes them from regular strings and enables their special features.

   Example:
   ```javascript
   let greeting = `Hello, world!`;
   console.log(greeting); // Output: Hello, world!
   ```

2. **`String Interpolation (${})`**: Template literals allow you to embed expressions inside strings using the `${expression}` syntax. The expression inside `${}` is evaluated and inserted into the string, making it easy to create dynamic strings without concatenation.

   Example:
   ```javascript
   let name = "Alice";
   let age = 25;
   let message = `My name is ${name} and I am ${age} years old.`;
   console.log(message); // Output: My name is Alice and I am 25 years old.
   ```

   You can also use complex expressions inside `${}`:

   ```javascript
   let a = 5, b = 10;
   let sum = `The sum of ${a} and ${b} is ${a + b}.`;
   console.log(sum); // Output: The sum of 5 and 10 is 15.
   ```

3. **`Multi-line Strings`**: Template literals allow strings to span multiple lines without needing concatenation or escape characters like `\n`. Everything between the backticks, including line breaks, is preserved in the output.

   Example:
   ```javascript
   let poem = `Roses are red,
   Violets are blue,
   Sugar is sweet,
   And so are you.`;
   console.log(poem);
   // Output:
   // Roses are red,
   // Violets are blue,
   // Sugar is sweet,
   // And so are you.
   ```
   