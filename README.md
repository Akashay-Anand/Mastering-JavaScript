# Mastering-JavaScript

<br>

# Lets Restart THE JAVASCRIPT. 🧡👨‍💻🤖   

#development Mode

<br>
<hr/>

## Topics covered
#learn_what_matters

1. Basic Core Concepts
-  Where to Place JS file(ex: head, end of body, async, differ, delay load) ? Critial Rendering Path - (if browser is rendering something than what is blocking or non-blocking)

1. word vs Keywords
2. Scope of variables
3. var const let - TDZ
4. Function - Types - Scope, closure
5. Memory
6. sync_async function
7. callback



<br>



## Important Concepts for reviewing.

- SetTimeout()
- EventLoop
- Promise.resolve()
- Micro Task
- 

-   
- Functional Programming? - Pure Functions ; Polyfill (map, filter reduce); compose ; Curring ; Higher order functions ;
- 
- 'this' ; with object, function  ect. ; call bind apply ; why this went to window? 
- 
- Framework (what will you chose in react, angular, view? what would be the reason for that) ; SSG/SSR/SPA 
- 
- Virtual Dom,
- Reconciliation
- 
- Prototypical Inheritance
- 
- Promises, Async, Await -> tehn;  haw to do parallel requests & sub sequential request ; exit callback ; 
- how to write promises implementation 
- state management 
- 
- Debounce vs Throttle


<br> <br> <br>
<hr> <hr> <hr>
<br> <br> <br>

# Event Loop

**Javascrip ?**
- JavaScript is a single threaded, non blocking, asynchronous concurrent language

- It has a call stack, an event loop and a callback queue + other APIs

- V8 is the JavaScript runtime which has a call stack and a heap

- The heap is used for memory allocation and the stack holds the execution context

- DOM, setTimeout, XML I-IttpRequest don't exist in V8 source code

<br>

**Asynchronous callbacks**

- Sometimes the JavaScript code can take a lot of time and this can block the page re render

- JavaScript has asynchronous callbacks for non blocking behaviour JavaScript runtime can do only one thing at a time

- Browser gives us other things which work along with the runtime like Web APIs.

- In node.js these are available as C++ APIs

<br/>

**TASK QUEUE**

- javaScript can do only one thing at a time

- The rest are queued to the task queue waiting to be executed

- When we run setTimeout, webapis will run a timer and push the function

- provided to setTimeout to the task queue once the timer ends

- These tasks will be pushed to the stack where they can executed

<br/>

**THE EVENT LOOP**

- JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks

- The event loop pushes the tasks from the task queue to the call stack

- setTimeout(func1, O) can be used to defer a function until all the pending tasks (so far) have been executed

- We can see how these things work in action by visiting

### Resources

- latentflip.com/loupe/

- http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

- https://replit.com/@codewithharry/100eventloop#index.js