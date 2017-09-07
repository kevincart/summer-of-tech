//
// Exercises from studying Javascript
//

console.log("Hello World!");

// Closures
// http://stackoverflow.com/questions/111102/how-do-javascript-closures-work
var gLogNumber, gIncreaseNumber, gSetNumber;
function setupSomeGlobals() {
  // Local variable that ends up within closure
  var num = 42;
  // Store some references to functions as global variables
  gLogNumber = function() { console.log(num); }
  gIncreaseNumber = function() { num++; }
  gSetNumber = function(x) { num = x; }
}

setupSomeGlobals();
gIncreaseNumber();
gLogNumber(); // 43
gSetNumber(5);
gLogNumber(); // 5

var oldLog = gLogNumber;

setupSomeGlobals();
gLogNumber(); // 42

oldLog() // 5

// Lambda functions
// From:
// https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c
// Lambda Calculus and currying
// anonymous function takes 2 arguments, sums

console.clear();
const sum = (x,y) => (x + y);

// this is a unary function that could also be expressed as:
// x => y => x+y

console.log(sum(1,2)); // 3

//Another example of currying
// f.g

const compose2 = f => g => x => f(g(x));

const double = n => n * 2;
const inc = n => n + 1;
const power = n => Math.pow(n, n);

console.log(compose2(double)(inc)(3)); // 8
console.log(compose2(inc)(double)(3)); // 7
console.log(compose2(inc)(power)(3)); // 28

//Another example

const apend = s1 => s2 => s1 + s2;
console.log(apend('Hello, ')('World!')); // "Hello, World!"
