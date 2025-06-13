//TODO 📚 Module 4 - Review Challenge

//TODO  🛠️ Step 4: Project Challenge — “Function Flow Debugger”

//* 🎯 Project Goal
//  Design and build a mini JavaScript program that demonstrates everything you have learned across all 13 lessons — from creating and calling functions, handling scope, and simulating the call stack, to throwing and catching errors in real execution.
//  We will construct a modular, traceable program that:
//  • Uses multiple function types
//  • Controls scope correctly
//  • Tracks execution visually
//  • Shows how JavaScript handles function calls at runtime

//* 📦 Core Requirements
//? > Concept                                             > What You Must Include
//  
//  • Function creation                                   • Use both declarations and expressions
//  • Parameters & arguments                              • Pass dynamic data between functions
//  • Global, function & block scope                      • Show which variables are accessible where
//  • Nested functions                                    • Access variables via lexical scope
//  • Arrow functions                                     • Use for callbacks or concise functions
//  • IIFE                                                • Use to isolate config/init logic
//  • Execution context simulation                        • Trace entry/exit of each function
//  • Error handling                                      • Simulate a thrown and caught error
//  • Call stack commentary                               • Comment or log simulated stack flow

//* 💡 Scenario Example (Starter Idea)
//  We are building a "User Onboarding" program. Here is how it breaks down:

//? main() → startOnboarding()
//          ↳ validateUser()
//              ↳ showWelcome()
//                  ↳ logMessage()

//  • main() kicks off everything.
//  • startOnboarding() is an IIFE.
//  • validateUser() checks input using a function expression.
//  • showWelcome() calls an arrow function for UI messages.
//  • Somewhere inside logMessage(), throw an error to simulate failure.
//  • Use callTrace[] to track function flow.

//* 🧪 Example Output (Conceptual)

//  [LOG] Entering: main
//  [LOG] Entering: validateUser
//  [LOG] Exiting: validateUser
//  [LOG] Entering: showWelcome
//  [LOG] Current callTrace: main → validateUser → showWelcome
//  [LOG] Error: Missing name parameter
//  [LOG] Caught error in main

//* 📝 Reflection Prompts

//  • How does `callTrace` mimic the real call stack?
//! Answer: The callTrace array mimics the real JavaScript call stack by manually tracking the order in which functions are entered and exited, using push and pop operations that correspond to function calls and returns.

//  • What happens if we do not use `try/catch` in `main()`?
//! Answer: If you remove the try/catch block from main(), any error thrown inside startOnboarding(), validateUser(), showWelcome() or logMessage() (such as the ReferenceError) will not be caught within the code. 

//  • How would asynchronous functions (e.g., `setTimeout`) affect this pattern?
//! Answer: Asynchronous functions like setTimeout fundamentally change how the call stack and callTrace pattern behave.

//  • Where else could arrow functions or IIFEs be used effectively?
//! Answer: Arrow functions or IIFEs can also be used for concise, immediate execution, especially for simple expressions.

//  ------------------------------------------------------

//! Solution

let callTrace = []

(() => {
    function main() {
        console.log("Entering: main");
        
        try {
            startOnboarding();
        } catch (e) {
            console.log("Caught error in main:", e.message);
        }
    }
    
    function startOnboarding() {
        validateUser();
    }
    
    function validateUser() {
        callTrace.push("validateUser");
        console.log("Current callTrace:", callTrace.join(" → "));
        console.log("Entering validateUser");
        showWelcome();
        console.log("Exiting: validateUser");
        console.log("Current stack:", callTrace);
        callTrace.pop();
    }
    
    const showWelcome = () => {
        callTrace.push("showWelcome");
        console.log("Current callTrace:", callTrace.join(" → "));
        console.log("Entering showWelcome");
        console.log("Hello!");
        logMessage();
        callTrace.pop()
    }
    
    const logMessage = function() {
        callTrace.push("logMessage");
        console.log("Current callTrace:", callTrace.join(" → "));
        console.log("Entering: logMessage");
        
        //  Error simulation
        throw new ReferenceError("Missing name parameter");
        
        callTrace.pop();
    };
})();

main();


