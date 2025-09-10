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


# 4. What are the default parameters in functions?

In JavaScript, **default parameters** let you assign a value to a function parameter if no argument is passed, or if the argument is explicitly `undefined`.

### Example:

```js
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Nozib");   // 👉 "Hello, Nozib"
greet();          // 👉 "Hello, Guest" (fallback value used)
greet(undefined); // 👉 "Hello, Guest" (still uses default)
```

---

## ✅ How They Work (Fallback Values)

1. If you **don’t pass an argument** → JS uses the default.
2. If you pass `undefined` → JS also uses the default.
3. If you pass `null` or any other value → default is **not used**.

### Example:

```js
function add(x = 1, y = 2) {
    return x + y;
}

console.log(add());          // 3 (uses defaults 1 + 2)
console.log(add(5));         // 7 (x = 5, y falls back to 2)
console.log(add(0, 0));      // 0 (defaults not used, since args exist)
console.log(add(undefined, 10)); // 11 (x defaults to 1, y = 10)
console.log(add(null, 10));  // 10 (null is a real value, not undefined)
```

---

## 🎯 Why It’s Useful

Before ES6, devs used manual fallbacks like:

```js
function add(x, y) {
    x = x || 1;
    y = y || 2;
    return x + y;
}
```

But this caused issues because `0` or `false` would incorrectly trigger the fallback.

Now with ES6 default parameters, it’s **cleaner and safer**.

---

👉 So, **default parameters provide fallback values** when arguments are **not passed** or are explicitly `undefined`, ensuring your function always has something to work with.


# 5. What is destructuring in JavaScript?

**Destructuring** in JavaScript is a way to **unpack values** from arrays or properties from objects into separate variables in a clean and concise way.

Instead of accessing values one by one, you can "destructure" them in a single line.

---

## ✅ Array Destructuring

### Example 1

```js
const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

console.log(first);  // "red"
console.log(second); // "green"
console.log(third);  // "blue"
```

---

### Example 2 – Skipping Values

```js
const numbers = [10, 20, 30, 40];
const [a, , c] = numbers;

console.log(a); // 10
console.log(c); // 30
```

---

### Example 3 – Using Rest Operator

```js
const fruits = ["apple", "banana", "mango", "orange"];

const [firstFruit, ...others] = fruits;

console.log(firstFruit); // "apple"
console.log(others);     // ["banana", "mango", "orange"]
```

---

### Example 4 – Swapping Variables

Before ES6:

```js
let x = 1, y = 2;
let temp = x;
x = y;
y = temp;
```

With destructuring:

```js
let x = 1, y = 2;
[x, y] = [y, x];

console.log(x); // 2
console.log(y); // 1
```

---

## ✅ Object Destructuring

### Example 1

```js
const user = { username: "john_doe", email: "john@example.com" };

const { username, email } = user;

console.log(username); // "john_doe"
console.log(email);    // "john@example.com"
```

---

### Example 2 – Renaming Variables

```js
const person = { name: "Alice", age: 25 };

const { name: fullName, age } = person;

console.log(fullName); // "Alice"
console.log(age);      // 25
```

---

### Example 3 – Default Values

```js
const product = { title: "Laptop" };

const { title, price = 1000 } = product;

console.log(title); // "Laptop"
console.log(price); // 1000 (default used because price wasn’t in object)
```

---


# 6. What is the spread operator (...) and rest operator?
The **spread operator** (`...`) and the **rest operator** (`...`) use the same syntax but serve opposite purposes in JavaScript, depending on the context.

---

### Spread Operator (`...`)

- **Purpose:** Expands (or "spreads") elements of an iterable (like an array) or properties of an object into individual elements or key-value pairs.
- **Usage with Arrays:**  
  It expands an array into individual elements.  
  ```js
  const arr = [1, 2, 3];
  const newArr = [...arr, 4, 5];  // [1, 2, 3, 4, 5]
  ```
- **Usage with Objects:**  
  It expands an object’s properties into a new object.  
  ```js
  const obj = { a: 1, b: 2 };
  const newObj = { ...obj, c: 3 };  // { a: 1, b: 2, c: 3 }
  ```

---

### Rest Operator (`...`)

- **Purpose:** Gathers multiple elements or properties into a single array or object.
- **Usage with Arrays:**  
  It collects the remaining elements into an array.  
  ```js
  const [first, ...rest] = [1, 2, 3, 4];
  console.log(first); // 1
  console.log(rest);  // [2, 3, 4]
  ```
- **Usage with Objects:**  
  It collects the remaining properties into a new object.  
  ```js
  const { a, ...rest } = { a: 1, b: 2, c: 3 };
  console.log(a);    // 1
  console.log(rest); // { b: 2, c: 3 }
  ```

---

### Key Difference Between Spread and Rest

| Feature          | Spread Operator (`...`)                  | Rest Operator (`...`)                    |
|------------------|-----------------------------------------|-----------------------------------------|
| **Function**     | Expands elements/properties              | Gathers remaining elements/properties   |
| **Context**      | Used in function calls, array/object literals | Used in destructuring assignments and function parameters |
| **Example**      | `const arr2 = [...arr1, 4]`              | `const [a, ...rest] = arr`               |

---

### Summary

- **`Spread`** expands arrays or objects into individual elements or properties.
- **`Rest`** collects multiple elements or properties into a single array or object.
- Both use the same `...` syntax but differ by context: **`spread`** in expressions, **`rest`** in destructuring or function parameters.