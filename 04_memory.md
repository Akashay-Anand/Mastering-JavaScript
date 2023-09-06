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
   - it store all our primitive(strings, numbers, booleans, undefined, and null) and references, which point to objects and functions data type.
   - Since the javascript engine knows that the size won’t change, it will allocate a fixed amount of memory for each value.
   - The process of allocating memory right before execution is known as static memory allocation.
   - 8 bytes of memory

2. Heap: Dynamic memory allocation
   -  it is different space for storing objects and functions when we create objects/function javascript engine automatically store them in a heap memory, object and function are the reference type data
   -  dynamic memory allocation

> In stack size of memory allocation is fixed but in heap javascript engine doesn’t allocate a fixed amount of memory for these objects. Instead, more space will be allocated as needed.


![Alt text](/assets/memory-eventloop.png)
