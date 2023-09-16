// Variables //////////////////////////////////

// TDZ example 
function foo01() {
    console.log("variable: " + var01);
    let var01 = 5;
}
// foo01();
// console.log(var02)
// let var02 = 5;

// Function's //////////////////////////////////

// named function

function foo() {
    console.log("named function executed");
    return null;
}
foo; // foo is function object; 
const hold = foo;
console.log(foo);
console.log(hold) // now this is also a function reference; can be used as function name
console.log("foo = " + foo) // function reference ; too execute use brackets foo()
console.log("foo = ". foo)  // undefined ? ; incorrect reference

//*VVI [note]: all there "foo"  output different things;

console.log("foo() = " + foo()) 
console.log("hold() = " + hold()) // can execute a function with brackets
// Note: console also have "undefined" printed there
// it means the function is not returning anything; "return value is undefined"

// [Note]: console.log("foo = ". foo) & console.log("hold() = ". hold()) ; both are incorect
//"." should not be used in case of function reference, if both sides are not related.



// arrow functions // also anonymous fun.

let arrowFun = () => {
    console.log("this is a arrow function");
}

arrowFun();

// Immediately Invoked Function Expressions (IIFEs)
(function (){
	let pi = 3.141
    console.log(pi)
})();
// the function get invocked by its on. 