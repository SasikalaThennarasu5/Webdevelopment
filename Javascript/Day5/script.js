console.log("JS53. Create a function that prints Hello, World!.")

function sayHello() {
    console.log("Hello, World!");
}

sayHello();

console.log("")

console.log("JS54. Write a function that takes a number and returns its cube.")

function cube(num) {
    return num * num * num;
}

console.log(cube(3));

console.log("")

console.log("JS55. Write a function to check if a number is even or odd.")

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}

console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));

console.log("")

console.log("JS56. Write a function to find the factorial of a number.")

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    
    let result = 1; 
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }
    return result;
}


console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-3)); // Output: "Factorial is not defined for negative numbers."


console.log("")

console.log("JS57. Create a function to return the sum of two numbers.")

function sum(a, b) {
    return a + b;
}

console.log(sum(2 + 9))

console.log("")

console.log("JS58. Write a function that returns the largest of three numbers.")

function largerstofthree(a, b, c) {
    return Math.max(a, b, c);
}

console.log(largerstofthree(10, 20, 30))
console.log("")

console.log("JS59. Write a function that checks if a string is a palindrome.")

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}


console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

console.log("")

console.log("JS60. Create a function to convert Celsius to Fahrenheit.")

function celsiusToFahrenheit(celcius) {
    return (celcius * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(16));

console.log("")

console.log("JS61. Write a function to calculate the simple interest.")

function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

console.log(simpleInterest(1000, 5, 2));

console.log("")

console.log("JS62. Create a function that reverses an array.")

function reverseArray(arr) {
    return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4, 5]));

console.log("")

console.log("JS63. Write a function that counts the number of vowels in a string.")

function countVowels(str) {
    const Vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (Vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello world!"));

console.log("")

console.log("JS64. Write an arrow function that doubles each number in an array.")

const doubleArray = (arr) => arr.map(num => num * 2);

console.log(doubleArray([1, 2, 3, 4, 5]));

console.log("")

console.log("JS65. Create a function that takes a callback and calls it.")

function callCallback(callback) {
    callback();
}


callCallback(() => console.log('Callback called!')); // Output: Callback called!