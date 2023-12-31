# All about Variabases

> A Variable is like a container for storing values like String, Number, Boolean, etc and complex data structure(Arrays, Objects) and even the entire function.

> Javascript is a **loosely or dynamically typed language**. It means while declaring a variable you don’t have to explicitly mention what type of data you are going to store.
>

### Types of Data which we store in a variable

> A primitive value is a value that has no properties or methods.

- String ===> “Anand”
- Number ===> 20
- Boolean ===> true, false
- Array ===> [“blue”,”red”]
- Objects ===> { name: “kumar”, age: 19 }
- Undefined 
- Null

> look at [Note-01] for more context on 'undefined' and 'null;
> look at [Note-02] for more context on Object ;

### And there are 6 common known falsy values in Javascript(full list), which are:

- keyword false
- number 0 and -0 (Also 0n and -0n )
- Empty string values: “”, '' , ``
- null (the absence of any value)
- undefined
- NaN — not a number

### Two ways of Variable declaration
- **Var** ; (old, not used much)
- **Let** ; (latest, 2015 onwords)

### Constant type
- **const** ; (fixed value)
  

#### Var & Let
> declare a variable use let or var keyword before your variable name.

```javascript
var age = 20;
console.log(age + ' is '+ typeof(age)); // number
age = "twenty";
console.log(age + ' is '+ typeof(age)); // string

let name; 
console.log(name); // value: undefined (default)
```
> it's default value is **undefined** ( if we don’t assign any value at the time of declaration)

> If you try to access the variable that doesn’t exist, you will get an error message. (Uncaught ReferenceError: variable not defined)
>

```javascript
console.log(a1); // output: undefined
console.log(b1); // output: error (Cannot access 'b1' before initialization)
console.log(c1) // output: error (ReferenceError: c1 is not defined)

var a1 = 1;
let b1 = 2;

console.log(a1); // output: 1
console.log(b1); // output: 2

```

#### DIFFERENCE BETWEEN VAR AND LET KEYWORD

**1. VAR**
<br>

**VAR HOISTING:** Var variables can be accessed before their declaration. Javascript moves all the var variables to the top of the function or global context.

![Alt text](/assets/var-hoisted.png)


**SCOPE OF VAR VARIABLE:** 
- *var variables have function scope.* that means if declared anywhere inside the function it will be available throughout that function scope.

- If you declare any var variable outside the function, then it is added to the global object and you can access it with a *window object in case of browsers*


``` javascript
var ok; // global scope; can be accessed anywhere
function foo(name) {
    ok = 'Yes';
    if(name == 'anand'){
        var flag = true; // function scope ; available anywhere inside function
        console.log(flag);
    }
    console.log(flag , ok);
}

foo(anand);
console.log(ok) // output: "Yes";
console.log(flag) // output: error: not defined;

```

**REDECLARATION OF VAR VARIABLES:** var variables can be redeclared in the same scope. It will override the existing variable.


**2. LET**

let keyword was introduced in ES2015(ES6). let variables cannot be accessed before declaration i.e **let variables are not HOISTED**

**SCOPE OF LET VARIABLE:** 
- let variables have block scope(closest set of curly braces {}). let declare variables that are limited in scope to the block, statement, or expression on which it is used.


- Unlike var, let variables are not added to the global object even if you declare it outside the function. If you try to access it with the window object it will output undefined.

``` javascript
// example 01
function foo(marks) {
    if(marks > 30)
        let flag = true; //error: SyntaxError: Lexical declaration cannot appear in a single-statement context
    console.log(flag);
}
// foo(40);

// example 02
function foo(marks) {
    if(marks > 30){
        let flag = true;
        console.log(flag) // output: true
    }
    console.log(flag); // error: flag is not defined
}
foo(40);

```

**REDECLARATION OF LET VARIABLE:** Variables declared using let keyword cannot be redeclared within the same scope, it will give an error.

```javascript
function getMarks() {
    let marks = 60;
    if(marks > 50) {
        let marks = 80; //no error because
        console.log(marks) //80
    }
    let marks = 90; //Unoaught SgntaxError:

    console.log(marks) //60
}
getMarks()

// The marks variable inside the if block will not give any error because let variable creates a new scope inside any pair of curly braces.
```


<hr/>


#### Declaration of a variable without let and var:
- declare any variable without using let or var keyword, then that variable will become a global variable and can be accessed outside the function and with the window object


```javascript
function foo() {
    z1 = 10;
}
foo();
console.log("z1 = " , z1 );
```


<hr/> <br><br>


#### CONST KEYWORD
- you cannot update/change the value of const variable.
- The constant variable **must be initialized with some value** otherwise it will give a syntax error.


```javascript
const marks = 90;
console.log(marks) // output: 90


const job = "SDE"; 
job = "marketing" // TypeError: Assignment to constant variable.
console.log(job) // never reached here

const name ; // SyntaxError: Missing initializer in const declaration
name = "anand";
console.log(name) //
```

- We can change the properties of an Object although we declare it as constant.
- But you cannot change the entire object that is declared constant. If you do, it will give an error


```javascript
const person = {
    name : "X92",
    age: 25
}
person.name = "abc" // change accepted

person = {job : "marketing"} // error: typeError

```

**REDECLARATION OF CONSTANT:** Constants cannot change through re-assignment and cannot be re-declared in the same scope.

<br/> <br/> <br/>

# TDZ (Temporal Dead Zone);
- The term "TDZ" stands for "Temporal Dead Zone," and it is a concept associated with the let and const variable declarations in JavaScript.

> The Temporal Dead Zone is the period between entering a scope (such as a function or block) and the actual declaration of a let or const variable within that scope. 
>
> During this period, the variable exists, but accessing it will result in a ReferenceError. It's called a **"dead zone"** because the variable is in a state where it cannot be used.

// example
```js
function example() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10;
  console.log(x); // 10
}
example();
```


<br/> <br/> <br/>
<hr/> <hr/> <hr/>
<br/> <br/> <br/>

## Do's and Dont's

* Prefer let over var to define variables as let will keep our variables in the right scope and make our code more manageable.
* Use const to define those values which you don’t want to change in your entire application like api_url, PI value etc.


<br/> <br/> <br/>
<hr/> <hr/> <hr/>
<br/> <br/> <br/>


# Note

[Note-01]:

> undefined is used when a variable or property has not been assigned a value, whereas null is used to explicitly indicate the absence of a meaningful value or to clear a variable or property.
- undefined often arises implicitly when something has not been assigned, and it's not usually set deliberately by developers.
- null is explicitly assigned by developers when they want to indicate that there is no meaningful value, often as part of the program's design.
## Undefined values

> Meaning: undefined is a special value in JavaScript that is assigned to variables that have been declared but have not been assigned a value, or to object properties that do not exist.

> Example: If you declare a variable without assigning a value to it, it will have an undefined value by default.
```js
// Ex 1
let x;
console.log(x); // Outputs: undefined

// Ex 2
let obj = {};
console.log(obj.propertyThatDoesNotExist); // Outputs: undefined
function doSomething() {}
let result = doSomething(); // The function doesn't return a value, so 'result' is undefined
```
> Usage case: It's common to see undefined when you access an object property that doesn't exist or when a function doesn't return a value.

> Note: It's also possible to explicitly assign the value undefined to a variable or property, but this is generally discouraged unless there's a specific reason for doing so.


## Null Value

> Meaning: null is another special value in JavaScript. It is explicitly assigned to variables or properties to indicate that they intentionally have no value or that they are empty.

> Example: You can assign null to variables or object properties when you want to explicitly indicate the absence of a value.
```js
let y = null;
console.log(y); // Outputs: null

let person = {
    name: "John",
    age: null, // Age is intentionally set to null to indicate it's unknown or not applicable
};
```
> Usage: null is often used when you want to clear the value of a variable or indicate that an object property doesn't hold any data.


[Note-02]:


> In JavaScript, almost "everything" is an object. All JavaScript values, except primitives, are objects.

- Booleans can be objects (if defined with the new keyword)
- Numbers can be objects (if defined with the new keyword)
- Strings can be objects (if defined with the new keyword)
- Dates are always objects
- Maths are always objects
- Regular expressions are always objects
- Arrays are always objects
- Functions are always objects
- Objects are always objects
  
> object as a variable
> - objects can contain many values.
> - Object values are written as name : value pairs (name and value separated by a colon).

> Object Propertie: The named values, in JavaScript objects, are called properties.

> Object Methods
- Methods are actions that can be performed on objects.
- Object properties can be both primitive values, other objects, and functions.
- An object method is an object property containing a function definition.

// example of object
```js
// create object with object literal
// Using an object literal, you both define and create an object in one statement.
// An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// creates an empty JavaScript object, and then adds 4 properties:

const person2 = {};
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

// create a new JavaScript object using new Object(), and then adds 4 properties:

const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";

```
> They are addressed by reference, not by value.