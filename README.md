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

