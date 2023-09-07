[note:] first cover memory and function
<br/>

**Javascript is a single-threaded Programming language(synchronous)**

- This means that only one set of instructions is executed at any single time. It’s not doing multiple things. 
- A language is single-threaded, if it has one call stack. (check memory file)

### Functions async

> Heap holds asynchronous functions after they are called on the stack.
>
> Asynchronous functions are chaotic in nature; we do not know how long it will take an asynchronous function to resolve, Because of this, the heap allows asynchronous functions to leave in the order they receive their return value, a promise, independent of the order in which they were put in the heap.
>
> An asynchronous function moves to the queue when it leaves the heap.
