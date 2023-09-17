/*
Properties of the object can be accessed using the following two notations:
Dot notation
Square bracket notation

*/


////// define objects
// 01 > object literal
const obj1 = {}
obj1.name = "object 1";

console.log(obj1); 

const obj2 = {
    name: "object 2",
    age : 20,
    fun : () => {return "this is a function";}
}
console.log(obj2);
console.log(obj2.fun());
console.log(obj2['fun']());

// 02 > using new object();
const obj3 = new Object();
console.log(obj3);
obj3.name = "object 3";
console.log(obj3['name']);

// 03 > using object constructor
// Objects can be created using the constructor function using the following two steps:
// - Define the object type by writing the constructor function. By convention, name of the constructor function starts with a capital letter
// - Create an instance of the object with new

function Human(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName,
	this.fullName = function(){
		return this.firstName + " " + this.lastName;
	}
}
var viratKohli = new Human("Virat", "Kohli");
console.log(viratKohli);

var sachinTendulkar = new Human("Sachin", "Tendulkar");
console.log(sachinTendulkar);


// Modify objects

// delete a property from object
delete obj2.age;

console.log(obj2.age); // op: undefined // age not exist
console.log(obj2);


// function
function hello(){
    console.log("Hello Anand");
}
console.log(hello); // return function definition