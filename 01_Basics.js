// #  Words vs keyword

// words = something which doesn't have any significance in JS
///// ex: anand, laptop, door
// keywords = words which are yoused to implement code logic.
///// ex: for, let, const, let x = 5; 


// # variables and constants
// variables = something which values can change.
// constants = something which values are fixed.
//* these are related to some storage block, use to store some data

// # var const let 

// > var: used in older version of js; (let replaced it)
//    var and let differs in scopes

var v = 4;
// > let
let l = 8;

// > const : 
const c = 12; 

var a = b = 10;
// console.log(a, b);

// console.log('a1' , a1);
let a1 = 10;
let a2;

// console.log('a1-2' , a1);

var ok;
function name(name) {
    ok = "Yes";
    if(name == 'anand'){
        var flag = true;
        console.log(name , flag);
    }    
    console.log(flag)
    console.log(ok , flag); 
}

// name('anand');
// console.log(flag) // error;

/// Example what if i wont use {} in if

function foo(marks) {
    if(marks > 30){
        let flag = true;
        console.log(flag) 
    }
    // console.log(flag);
}

// foo(40);

function getMarks() {
    let marks = 60;
    if(marks > 50) {
        let marks = 80; //no error because
        console.log(marks) //80
    }
    // let marks = 90; //Unoaught SgntaxError:

    console.log(marks) //60
}
// getMarks()

// const job;
job = "dev";

console.log(job);

const person = {
    name : "X92",
    age: 25
}
console.log(person.name);
person.name = "abc" // change accepted
console.log(person.name);


function foo() {
    z1 = 10;
}
foo();
console.log("z1 = " , z1 );