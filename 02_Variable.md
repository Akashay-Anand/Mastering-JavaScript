# All about Variabases

> A Variable is like a container for storing values like String, Number, Boolean, etc and complex data structure(Arrays, Objects) and even the entire function.

> Javascript is a **loosely or dynamically typed language**. It means while declaring a variable you don’t have to explicitly mention what type of data you are going to store.
>

### Types of Data which we store in a variable

- String ===> “Anand”
- Number ===> 20
- Boolean ===> true, false
- Array ===> [“blue”,”red”]
- Objects ===> { name: “kumar”, age: 19 }
- Undefined
- Null
  

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