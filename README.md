# React useEffect Async/Await Without Cleanup

This repository demonstrates a common error in React's `useEffect` hook: using `async/await` without proper cleanup.  The bug leads to potential memory leaks and unexpected behavior.

## Bug Description
The `useEffect` hook, when using `async/await` to fetch data, needs a cleanup function to prevent memory leaks and race conditions.  The example provided lacks this function, resulting in improper lifecycle management.

## Solution
The solution demonstrates the correct way to implement `async/await` within `useEffect`, including a cleanup function to abort any pending requests or clean up resources.

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console for any errors or unexpected behavior with the initial buggy code.
5. Run the fixed code to observe the correct execution.
