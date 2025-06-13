# Module 4 Project Challenge — Function Flow Debugger

## 🎯 Objective

This project demonstrates the complete range of skills learned in Module 4: Functions, Scope, and Execution Context. It simulates how JavaScript builds and manages the call stack through various function types and handles real-time error tracing and execution flow.

---

## ✅ Features Implemented

### 🔁 Function Types Used
- **Function declaration**: `main`, `startOnboarding`, `validateUser`
- **Function expression**: `logMessage`
- **Arrow function**: `showWelcome`
- **IIFE**: Used to encapsulate the whole structure and prevent global pollution

### 🧱 Execution Context & Stack Tracking
- Each function logs entry/exit and pushes/pops its name to a `callTrace[]` array.
- Simulates how the call stack grows and collapses during runtime.

### 💥 Error Propagation
- `logMessage()` throws a `ReferenceError`, caught in `main()` using a `try/catch` block.
- Simulates real error bubbling through nested function calls.

---

## 🧪 Execution Flow Overview

```
main()
 └─ startOnboarding()
     └─ validateUser()
         └─ showWelcome()
             └─ logMessage() → throws ReferenceError
```

- `callTrace` logs each active function on entry
- Error stops the stack from continuing past the throw
- Catch block in `main()` logs the error gracefully

---

## 📋 Sample Console Output

```
Entering: main
Current callTrace: validateUser
Entering validateUser
Current callTrace: validateUser → showWelcome
Entering showWelcome
Hello!
Current callTrace: validateUser → showWelcome → logMessage
Entering: logMessage
Caught error in main: Missing name parameter
```

---

## 🧠 Learning Reinforcement

- Traceable execution simulates **JavaScript's call stack** in real time
- Uses **multiple function types** to demonstrate scope and context differences
- Demonstrates **scope control, modularity**, and **execution flow transparency**
- Error handling demonstrates real debugging technique

---

## 📝 Reflection Prompts

- How does `callTrace` mimic the real call stack?
- What happens if you don’t use `try/catch` in `main()`?
- How would asynchronous functions (e.g., `setTimeout`) affect this pattern?
- Where else could arrow functions or IIFEs be used effectively?

---

This project brings together every concept from Module 4 and turns it into a working, traceable, and instructive simulation of how JavaScript actually works.
