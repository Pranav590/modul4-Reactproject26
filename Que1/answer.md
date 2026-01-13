

---

# Node.js Internals – Theory

## Node.js Architecture

Node.js is a **runtime environment** that allows JavaScript to run outside the browser.
Its architecture is designed to handle **asynchronous, non-blocking, event-driven** operations efficiently.

High-level components:

* **JavaScript Engine (V8)** – Executes JavaScript code
* **Node.js Core APIs** – Built-in modules like fs, http, crypto
* **Native Bindings (C/C++)** – Bridge between JS and system-level code
* **Event Loop** – Manages asynchronous callbacks
* **libuv** – Handles async I/O, event loop, thread pool

---

## JavaScript Engine (V8)

* V8 is the JavaScript engine developed by Google
* Written in C++
* Converts JavaScript into **machine code**
* Handles:

  * Parsing JavaScript
  * Just-In-Time (JIT) compilation
  * Memory management (Garbage Collection)
* Node.js uses V8 to execute JavaScript outside the browser

---

## Node.js Core APIs

* Built-in modules provided by Node.js
* Examples:

  * `fs` – File system operations
  * `http` – Create web servers
  * `path` – File path utilities
  * `crypto` – Cryptography functions
* These APIs expose JavaScript interfaces but internally rely on **native C/C++ code**

---

## Native Bindings

* Native bindings connect **JavaScript code** with **C/C++ implementations**
* Act as a bridge between:

  * V8 (JavaScript)
  * libuv and OS-level system calls
* Allow Node.js to perform low-level operations like:

  * File access
  * Network requests
  * Thread management

---

## Event Loop

* The event loop is the **core mechanism** that enables non-blocking behavior
* It continuously checks:

  * Callback queues
  * Executes tasks when the call stack is empty
* Ensures Node.js can handle many concurrent operations using a single main thread

---

## libuv

### What is libuv?

* libuv is a **C library** used by Node.js
* Provides:

  * Event loop
  * Asynchronous I/O handling
  * Thread pool
* Works across platforms (Windows, Linux, macOS)

### Why Node.js needs libuv

* JavaScript itself cannot perform async I/O
* libuv handles:

  * File system operations
  * Network I/O
  * Timers
* Makes Node.js fast and non-blocking

### Responsibilities of libuv

* Managing the event loop
* Handling async file and network operations
* Managing the thread pool
* Abstracting OS-specific system calls

---

## Thread Pool

### What is a thread pool?

* A group of background threads managed by libuv
* Default size: **4 threads** (can be increased)

### Why Node.js uses a thread pool

* Some operations are **blocking** by nature
* To prevent blocking the main event loop
* Heavy tasks are offloaded to background threads

### Operations handled by the thread pool

* File system operations (`fs.readFile`, `fs.writeFile`)
* DNS lookups
* Cryptographic operations
* Compression (zlib)

---

## Worker Threads

### What are worker threads?

* Worker threads allow running JavaScript in **multiple threads**
* Each worker has:

  * Its own event loop
  * Its own V8 instance
* Used for CPU-intensive tasks

### Why are worker threads needed?

* Node.js main thread is single-threaded
* CPU-heavy tasks can block the event loop
* Worker threads enable true parallel computation

### Difference between thread pool and worker threads

| Thread Pool                        | Worker Threads      |
| ---------------------------------- | ------------------- |
| Managed by libuv                   | Managed by Node.js  |
| Used for internal async operations | Used by developers  |
| Not directly accessible            | Explicitly created  |
| Limited to specific tasks          | Can run any JS code |

---

## Event Loop Queues

### Macro Task Queue

* Holds tasks scheduled for later execution
* Examples:

  * `setTimeout`
  * `setInterval`
  * `setImmediate`
  * I/O callbacks

### Micro Task Queue

* Holds high-priority tasks
* Executed immediately after the current operation
* Examples:

  * `Promise.then`
  * `Promise.catch`
  * `process.nextTick`

### Execution Priority

1. Current call stack
2. **Micro Task Queue**
3. **Macro Task Queue**

Microtasks always execute **before** macrotasks.

### Examples

**Micro Tasks**

* Promise resolution
* `process.nextTick()`

**Macro Tasks**

* Timers
* I/O events
* UI or network callbacks

---

## Summary

* Node.js combines V8, libuv, and native bindings
* Event-driven and non-blocking by design
* Uses thread pool and worker threads for performance
* Event loop and queues control execution flow efficientl
