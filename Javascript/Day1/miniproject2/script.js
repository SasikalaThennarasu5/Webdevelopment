// Store quiz details
var question1 = "How many letters are there in the English alphabet?";
var options1 = "A) 26, B) 24, C) 30, D) 21";
var correctAnswer1 = "A";
var userAnswer1 = "A"; // Change to test different answers

var question2 = "Name the National animal of India?";
var options2 = "A) Tiger, B) Lion, C) Elephant, D)giraffe";
var correctAnswer2 = "A";
var userAnswer2 = "c"; // Change to test different answers

var question3 = "What is 4 + 8?";
var options3 = "A) 13, B) 12, C) 14, D) 10";
var correctAnswer3 = "B";
var userAnswer3 = "B"; // Change to test different answers

// Display quiz results
console.log("Question 1: ",question1);
console.log("Options: " ,options1);
console.log("Your Answer: " ,userAnswer1);
console.log("Correct Answer: " ,correctAnswer1);
console.log(userAnswer1 === correctAnswer1 ? "Correct!" : "Incorrect!");

console.log("Question 2: " , question2);
console.log("Options: " , options2);
console.log("Your Answer: " ,userAnswer2);
console.log("Correct Answer: " , correctAnswer2);
console.log(userAnswer2 === correctAnswer2 ? "Correct!" : "Incorrect!");

console.log("Question 3: " , question3);
console.log("Options: " , options3);
console.log("Your Answer: " , userAnswer3);
console.log("Correct Answer: " , correctAnswer3);
console.log(userAnswer3 === correctAnswer3 ? "Correct!" : "Incorrect!");

// Calculate final score
var score = (userAnswer1 === correctAnswer1) + (userAnswer2 === correctAnswer2) + (userAnswer3 === correctAnswer3);
console.log("Final Score: " + score + " / 3");
