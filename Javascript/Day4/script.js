console.log("JS40. Print numbers from 1 to 10 using a for loop.")

for (let i=1; i<=10; i++){
    console.log("numbers:",i);
}

console.log("")

console.log("JS40. Print even numbers from 2 to 20 using a for loop.")

for(let i=2; i<=20; i+=2){
    console.log(i);
}

console.log("")

console.log("JS42. Print numbers from 10 to 1 using a while loop.")

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

console.log("")

console.log("JS43. Print Hello World! 5 times using a do-while loop.")

let j = 1; 
do {
    console.log("Hello World!"); 
    j++;  
}
while (j <= 5); 

console.log("")

console.log("JS44. Iterate over an array and print each element using a for...of loop.")

let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

for (let val of fruits) {
    console.log(val);
}

console.log("")

console.log("JS45. Iterate over an object and print its properties using a for...in loop.")

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let val in person) {
    console.log(val + ": " + person[val]);
}

console.log("")

console.log("JS46. Sum numbers from 1 to 10 using a for loop.")

let totalsum=0;
for (let i=1; i<=10; i++){
    totalsum += i;
}

console.log(totalsum);  

console.log("")

console.log("JS47. Find the first number greater than 50 in an array using break.")

let numbers = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];


let firstGreaterThan50 = null;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        firstGreaterThan50 = numbers[i]; 
        break; 
    }
}

console.log(firstGreaterThan50);

console.log("")

console.log("JS48. Skip printing numbers divisible by 3 using continue.")

let number = [15, 30, 34, 63, 48, 81, 72, 89];

for (let i = 0; i < number.length; i++) {

    if (number[i] % 3 === 0) {
        continue; 
    }

    console.log(number[i]); 
}


console.log("")

console.log("JS49. Create a multiplication table for 5 using a for loop.")

let num = 5;
for (let i=1; i<=10; i++){
    console.log(`${num} x ${i} = ${num* i}`);
}

console.log("")

console.log("JS50. Reverse a string using a loop.")

let str = "Hello, World!"; 
let reversedStr = ""; 

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]; 
}

console.log(reversedStr);

console.log("")

console.log("JS51. Count the number of vowels in a string using a loop.")

let string = "Hello, World!"; 
let vowelCount = 0; 

for (let i = 0; i < string.length; i++) {
    let char = str[i].toLowerCase(); 
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++; 
    }
}

console.log(vowelCount);

console.log("")

console.log("JS51. Find the largest number in an array using a loop.")

let numbers1 = [10, 5, 45, 4, 48, 5, 3, 2]; 
let largest = numbers1[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers1[i] > largest) {
        largest = numbers1[i]; 
    }
}

console.log(largest); 

console.log("")
