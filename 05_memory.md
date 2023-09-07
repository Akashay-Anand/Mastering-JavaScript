# Memory
> In javascript when we create any variable , function or anything javascript engine allocate some space or memory for this and releases it once it’s not needed anymore.

> Every assigned variable , function or anything go through memory life cycle stages 
- **allocate -> use -> release**

* Allocate memory
    - JavaScript takes care of this for us: It allocates the memory that we will need for the object/function we created.
* Use memory
    - Using memory is something we do explicitly in our code: Reading and writing to memory is nothing else than reading or writing from or to a variable.
* Release memory
    - This step is handled as well by the JavaScript engine. Once the allocated memory is released, it can be used for a new purpose.

![Alt text](/assets/memory_lifecycle.png)

## when we create something where is this going to be stored?

- two different data structure that javascript engine uses
- **stack** and **heap**

![Alt text](/assets/memory_stack-heap.png)

1. Stack : Static memory allocation
   - Stack is a data structure which follows LIFO(last in first out) principle.
   - Programmatically, it’s just an array with two principled operations: push and pop.
   - it store all our primitive(strings, numbers, booleans, undefined, and null) and references, which point to objects and functions data type.
   - Since the javascript engine knows that the size won’t change, it will allocate a fixed amount of memory for each value.
   - The process of allocating memory right before execution is known as static memory allocation.
   - 8 bytes of memory

> Both synchronous and asynchronous functions are added to the stack when called. Functions on the stack execute in a first in, last out order, so the most recent function placed on the stack will execute first

> [Note:] When an asynchronous function starts to execute in the stack it is moved to the heap.
> 



2. Heap: Dynamic memory allocation
   - Heap is dynamic memory or reference type where the data are stored like an object.
   -  it is different space for storing objects and functions. when we create objects/function javascript engine automatically store them in a heap memory.
   - these objects can be called through a reference from the stack memory.
   - 

> In stack size of memory allocation is fixed but in heap javascript engine doesn’t allocate a fixed amount of memory for these objects. Instead, more space will be allocated as needed. This makes it much more complex to keep track of which parts of the heap are allocated or free at any given time.
> 
![Alt text](/assets/memory_stack-heap2.png)

// for check 
[note] stack is also refered as **call stack**... & Heap is refered as **Memory Heap**


### Important points
- When you create a variable and assign it a primitive value, it will be stored in stack. 
- If you declare a variable and assign it an object, two things will happen. First, JavaScript will allocate memory in stack for that variable. and it will store object in Heap memory. And variable that exists in the stack will only point to this object in memory heap (same thing hapen with function).
- is context of object and function, variable store there reference ; As both present in different area.
- primitive value are pased-by-value and non-primitive like object and function are passed-by-reference ; when we try to copy.
- 

<br/>
<hr/>
<br/>

## call stack


![Alt text](/assets/memory-eventloop.png)

> This is not the same as the stack

> stack is a place JavaScript uses to store variables assigned with primitive values.

> Call stack is a mechanism JavaScript uses to keep track of functions. 
> - When you call a function JavaScript will add that function to the call stack.
> - If this function calls another function, JavaScript will add that function to the call stack as well, above the first function.
> - When one function is finished, JavaScript will remove that function from the call stack.
> - [Note:] every new function in the stack will be added to the top of the call stack
> - [note:] call stack is executed from the top to the bottom. The last function added to the stack will be executed as first.
> 

<br/>
<br/>
<br/>
<br/>

## Garbage Collection
> In computer science, garbage collection (GC) is a form of automatic memory management
> 
> Javascript is a garbage-collected language.
> 
> The garbage collector attempts to reclaim memory which was allocated by the program but is no longer referenced — also called garbage

ex:  let's say within a function we create an object and that object gets stored somewhere in our memory heap, automatically when we finish calling that object and if we don't need that object anymore, and there is no reference to it in our program, Javascript is going to clean it up.

**[Note :]** Garbage collection in Javascript uses the Mark and sweep algorithm; when a reference to a variable is removed, its deleted

> Three common memory leaks
- Global VAriable, Event Listners, SetInterval()



<br/>
<br/>
<br/>
<br/>
<hr/>
<hr/>
<br/>
<br/>
<br/>
<br/>


## References

- https://blog.alexdevero.com/memory-life-cycle-heap-stack-javascript/
- https://medium.com/@allansendagi/javascript-fundamentals-call-stack-and-memory-heap-401eb8713204
- https://medium.com/@selmankoral/memory-management-in-javascript-781e1098e5b3
- https://blog.alexdevero.com/garbage-collection-in-javascript/#garbage-collection-and-how-it-works
- 


