console.log("js.1.Write a JavaScript program to display Hello, JavaScript! using console.log()")
console.log("Hello JavaScript");
console.log("")

console.log("js.2.Create a variable using var, let, and const and print their values.")
var x=10;
let y=12;
const z=15;
console.log("")

console.log("var x:",x)
console.log("let y:",y)
console.log("const z:",z)
console.log("")

console.log("js.3:Demonstrate the difference between var, let, and const in terms of scope")

//var: function scope, both redeclaration and reassignment are allowed
var x=1
var x=2

// let: block scope, only reassignment is allowed
let d=2
//let y=4  // syntaxError: Identifier 'y' has already been declared

//const: block scope, both redeclaration and reassignment are not allowed
const e = 5;
//z = 6; //  TypeError: Assignment to constant variable


console.log("")

console.log("js.4. Check the type of a variable using typeof for different data types.")
let num = 2;
console.log("num:", typeof num); 

let str = "Welcome";
console.log("str:", typeof str);  

let bool = true; 
console.log("bool:", typeof bool);
       
let obj = { name: "Sasi" };
console.log("obj:", typeof obj); 

let arr = [1, 2, 3]; 
console.log("arr:", typeof arr);   

let func = function() {};
console.log("func:", typeof func); 

let und;
console.log("und:", typeof und);

let nul = null;
console.log("nul:", typeof nul);   

let sym = Symbol("id"); 
console.log("sym:", typeof sym);

let bigInt = 12345678901234567890n; 
console.log("bigInt:", typeof bigInt); 
console.log("")

console.log("js.5. Create a user profile object containing name, age, and is Student properties.")

const userProfile={
    name: "Sasi",
    age:"15",
    isStudent: true
};

console.log("Name:", userProfile.name);  // Alice Johnson
console.log("Age:", userProfile.age);    // 22
console.log("Is Student:", userProfile.isStudent); // true

console.log("")

console.log("js.6.Store and display a list of favorite colors using an array.")

let MyfavouriteColors = ["Blue", "Green","Orange", "Red", "Purple", "Yellow"];
console.log("My favourite Colors:",MyfavouriteColors)

console.log("")

console.log("js.7. Perform type conversion: Convert a string 100 to a number and a number 100 to a string")

let X=100;
console.log("X",typeof X)

// Convert string "100" to a number
let stringToNumber = Number("100"); 
console.log(stringToNumber, typeof stringToNumber); 

// Convert number 100 to a string
let numberToString = String(100); 
console.log(numberToString, typeof numberToString); 

console.log("")

console.log("js.8. Write a function that returns a Boolean value based on a condition")
function isStudent(age){
    return age<=18;
}

console.log(isStudent(19))
console.log(isStudent(13))

console.log("")

console.log("js.9. Demonstrate null vs undefined by creating two different variables and checking their types")

//null variable
let a=null;
console.log("a:",a);
console.log("Type of a:",typeof a)

//undefined variable
let b;
console.log("b:",b);
console.log("Type of b:",typeof b)

console.log("")

console.log("js.10. Use Symbol data type to create a unique ID and compare two symbols.")

const id1 = Symbol("uniqueID");
const id2 = Symbol("uniqueID");

//comparing two symbols
console.log(id1 == id2);

console.log("")

console.log("js.11. Use BigInt to store a large number and print its type using typeof.")
const Biginteger = 454545487465154845124n

console.log("Value:",Biginteger)
console.log("Type:",typeof Biginteger)

console.log("")

console.log("js.12. Write a function that accepts a number as an argument and returns Even or Odd.")

function checkevenodd(number){
    return number % 2 == 0? "Even" : "Odd";
}
// Testing the function
console.log(checkevenodd(5))
console.log(checkevenodd(9))
console.log(checkevenodd(7))
console.log(checkevenodd(10))

console.log("")

console.log("js.13. Create a temperature conversion program that converts Celsius to Fahrenheit using a variable")

// Define a variable for Celsius temperature
let celsius = 16;

// Convert Celsius to Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;

// Display the result
console.log(celsius + "°C is equal to " + fahrenheit + "°F");

console.log("")

