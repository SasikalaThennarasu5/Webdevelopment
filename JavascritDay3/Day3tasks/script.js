console.log("JS27. Write an if condition to check if a number is positive.")

let number1 = parseInt(prompt("Enter a number:"));

if (number1 > 0){
    console.log("The number is positive.")
}
console.log("")

console.log("JS28. Use if-else to check if a person is an adult.")

let age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You are an adult.");
} 
else {
    console.log("You are not an adult.");
}

console.log("")

console.log("JS29. Check if a number is even or odd using if-else.")

let number2 = parseInt(prompt("Enter a number:"));

if (number1 % 2 === 0) {
    console.log("The number is even.");
} 
else {
    console.log("The number is odd.");
}

console.log("")

console.log("JS30. Use if-else if-else to check grade categories.")

let marks = parseInt(prompt("Enter your marks:"));

if (marks >= 90) {
    console.log("Grade: A");
} 
else if (marks >= 80) {
    console.log("Grade: B");
} 
else if (marks >= 70) {
    console.log("Grade: C");
}
else if (marks >= 60) {
    console.log("Grade: D");
} 
else {
    console.log("Grade: F");
}

console.log("")

console.log("JS31. Check if a person is eligible for a driver's license.")

let age1 = parseInt(prompt("Enter your age:"));

if (age1 >= 18) {
    console.log("You are eligible for a driver's license.");
} 

else {
    console.log("You are not eligible for a driver's license.");
}

console.log("")

console.log("JS32. Create a nested if condition to check both login and admin status.")

let isLoggedIn1 = true;
let isAdmin1 = false;

if (isLoggedIn1) {
if (isAdmin1) {
console.log("Welcome, Admin!");
} 
else {
console.log("Welcome, User!");
}
} 
else {
console.log("Please log in.");
}

console.log("")

console.log("JS33. Use a switch statement to print messages for different days.")

let day = prompt("Enter a day:").toLowerCase();

switch (day) {
    case "monday":
        console.log("Start of the workweek!");
        break;

    case "tuesday":
        console.log("Keep going!");
        break;

    case "wednesday":
        console.log("Midweek already!");
        break;

    case "thursday":
        console.log("Almost there!");
        break;

    case "friday":
        console.log("Weekend is near!");
        break;

    case "saturday":
        console.log("Enjoy your weekend!");
        break;

    case "sunday":
        console.log("Relax and recharge!");
        break;

    default:
        console.log("Invalid day entered.");
}

console.log("")

console.log("JS34. Use a ternary operator to check if a person is eligible for a senior citizen discount.")

let age2 = parseInt(prompt("Enter your age:"));

let discountMessage = age2 >= 60 ? "Eligible for senior citizen discount." : "Not eligible for senior citizen discount.";

console.log(discountMessage);

console.log("")

console.log("JS35. Check if a user is logged in using &&.")

let isLoggedIn = true;
let hasAccess = true;

if (isLoggedIn && hasAccess) {
    console.log("User is logged in and has access.");
} 
else {
    console.log("User is not logged in or does not have access.");
}

console.log("")

console.log("JS36. Use || to check if a username or email is provided.")

let username = prompt("Enter your username:");
let email = prompt("Enter your email:");

if (username || email) {
    console.log("Username or email provided.");
}
 else {
    console.log("No username or email provided.");
}

console.log("")

console.log("JS37. Use ! to negate a boolean variable.")

let isAdmin = false;

if (!isAdmin) {
    console.log("Access denied. Admins only.");
}
 else {
    console.log("Welcome, Admin!");
}

console.log("")

console.log("JS38. Check if the current year is a leap year.")

let year = parseInt (prompt("Enter a year"));

if (year % 4 === 0) {
    console.log(year + " is a leap year.");
} 
else {
    console.log(year + " is not a leap year.");
}

console.log("")

console.log("JS39. Validate a password length using an if statement.")

let password = prompt("Enter your password:");

if (password.length >= 8) {
    console.log("Password is valid.");
}
 else {
    console.log("Password is too short. It must be at least 8 characters long.");
}

console.log("")