//Js.14. 
console.log("js.14: Write a program that calculates the total price of 3 products.")

var product1 = 10;
var product2 = 20;
var product3 = 15;

var totalPrice = product1 + product2 + product3;

console.log(product1 + product2 + product3); 

console.log("")

//Js.14. 
console.log("js.15: Create a script that checks if a number is even or odd using the modulus operator")

function CheckEvenOdd(number){
    return number % 2 == 0? "Even" : "Odd";
}
// Testing the function
console.log(CheckEvenOdd(5))
console.log(CheckEvenOdd(9))
console.log(CheckEvenOdd(7))
console.log(CheckEvenOdd(10))

console.log("")

//Js.16. 
console.log("js.16: Write a program that increments a number from 1 to 10 using ++.")

let num = 5;
console.log(num++); // 5 (then increases to 6)
console.log(++num); // 7 (increases before printing)

console.log("")

//Js.17. 
console.log("js.17: Check if a user is eligible to vote using comparison operators.")

function CheckVoteEligibility(age) {
console.log (age >= 18 ? "You are eligible to vote" : "You are not eligible to vote" )
}

var UserAge = 15
CheckVoteEligibility(UserAge);

var UserAge = 81
CheckVoteEligibility(UserAge);


console.log("")

//Js.18. 
console.log("js.18: Write a program to compare two strings using == and ===.")

var string1 = "Hello";
var string2 = "hello";

console.log("Comparing:",string1,"and", string2);
console.log("== comparison:", string1 == string2 ? "equal" : "notequal");
console.log("=== comparison:", string1 == string2 ? "stictly equal" : "not strictly equal");

console.log("")

//Js.19. 
console.log("js.19: Use && to check if a user has a valid email and password.")

var email = "user@example.com";
var password = "passsword123";

var isValid = email !== "" && password !== "";

console.log(isValid ? "Login successful " : "Error: Email and password are required ");

console.log("")

//Js.20. 
console.log("js.20: Write a program to update wallet balance using assignment operators.")

var walletBalance = 100;
console.log("Initial Wallet Balance: Rs." + walletBalance);

walletBalance += 50;
console.log("After Adding $50: Rs." + walletBalance);

walletBalance -= 30; 
console.log("After Spending $30: Rs." + walletBalance);

console.log("")

//Js.21. 
console.log("js.21: Use a ternary operator to check if a product is available in stock.")

let stock = 10;
let ProductAvailable = stock >= 1 ? "Available" : "Not Available";
console.log(ProductAvailable); // "Available"

console.log("")

//Js.22. 
console.log("js.22: Create a simple greater than condition to compare two numbers.")

console.log(10 > 3);
console.log(10 > 13);

console.log("")

//Js.23. 
console.log("js.23: Write a JavaScript program to apply discounts if a cart total exceeds $50.")

let cartTotal = 200; // Total price in shopping cart
let discount = cartTotal > 50 ? cartTotal * 0.10 : 0; // 10% discount if total > 50
let finalPrice = cartTotal - discount; // Final price after discount
console.log("Cart Total: $" + cartTotal);
console.log("Discount Applied: $" + discount);
console.log("Final Price to Pay: $" + finalPrice);

console.log("")

//Js.24. 
console.log("js.24: Use || to allow login using email or phone number.")

var email = "abc@gmail.com";
var phone = "1234567890";

console.log((email !== "" || phone !== "") ? "Login successful" : "Error: Provide email or phone number");
console.log("")

//Js.25. 
console.log("js.25: Implement a Buy 1 Get 1 Free condition using if and &&.")

var itemsBought = 1;
var isOfferActive = true; 

if (itemsBought >= 1 && isOfferActive) {
    console.log("You get 1 extra item for free!");
} 

console.log("")

//Js.26. 
console.log("js.26: Check if a year is a leap year using the modulus operator.")

function CheckLeapYear(number){
    return number % 4 == 0? "LeapYear" : "Not a Leap Year";
}
// Testing the function
console.log(CheckLeapYear(2000))
console.log(CheckLeapYear(2016))
console.log(CheckLeapYear(2002))
console.log(CheckLeapYear(2006))

console.log("")


console.log("")


