# Function

> A function is a block of code that can be executed repeatedly, as needed. Functions are really useful because you write the code once and then you can run it multiple times.
>
> They let us write concise, modular, reusable, and maintainable code.
>
> A function is a code snippet that *can be called by other code or by itself, or a variable* that refers to the function.
> 
> When a function is called, arguments are passed to the function as input, and the function can optionally return a value. A function in JavaScript is also an *object*.

- ex:
```javascript
function fun(name){
    console.log("Hello". ${})
}
fun('Anand');
```

# Types of functions

### Using function declaration

```javascript
function nameOfFunction() {
	//some code here....
}

// > Consist of
// Function keyword
// The name of the function
// Parentheses (which can take in parameters, or also be empty)
// The body of the function (wrapped in curly braces).
```

### using function as expression

>  function expressions allow you to define a named function or omit the function name to create an anonymous function.
>
> A function keyword creates a function value that can be assigned to a variable when it is used as an expression.
- **So, to invoke this function, we call it using the variable name which serves as the new function name.**
  
```javascript
// 1. named expression
let namedFunction = function myFunction(){
	//some code here...
}
// can be refer using variable name and function name

// 2. unnamed/anonymous expression
let anonymousFunction = function(){
	//some code here...
}
// only variable names is there for reference

```
// reference a function

```javascript
// this function are like object
// some output example; (note: variable names and function names both are same properties)

console.log(myFunction) // [Function: myFunction]
console.log("fun = " + myFunction ); // print function template;
console.log(myFunction()) // call and execute function ; return value (undefined)
console.log("fun = " + myFunction()) // execute function ; return value (undefined)


console.log("fun = ". myFunction); // wrong reference ; undefined
console.log("fun = ". myFunction()); // error wrong reference

```

### Arrow Functions
> function expression but they have a shorter syntax. They were introduced in ES6 and help us write cleaner code.
>

```javascript
let nameOfFunction = (parameters) => {
	//function body
}

// If the function body within the curly braces contains only a single statement, then the braces can be omitted

```

### Immediately Invoked Function Expressions (IIFEs)

> IIFE function expression notation (explicitly an anonymous function) that works in isolation and is independent of any other code. It gets invoked immediately where it is defined.
>
```javascript
(function (){
	let pi = "3.141"
    console.log(pi)
})();
```

<br/>
<hr/>
<br/>

# Construct functions;
> A constructor function in JavaScript is a specific type of function that is used to create and initialize objects. While constructor functions are written in JavaScript just like regular functions, they serve a special purpose in object-oriented programming.

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating instances using the constructor function
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

```


<br/>
<hr/>
<br/>


# Function Scope and Closures



<br/>
<br/>
<br/>
<hr/>
<hr/>
<br/>
<br/>
<br/>


Note: /////////////////////
- ASYNC, SYNC, callback, etc. will be cover in other section


Question //////////////////////////////////////////////////
