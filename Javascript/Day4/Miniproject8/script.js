let num = parseInt(prompt("Enter a positive number:"));


if (num <= 0 || isNaN(num)) {
    console.log("Please enter a valid positive number.");
} else {
    let sum = 0;

    
    while (num > 0) {
        let lastDigit = num % 10;  
        sum += lastDigit;          
        num = Math.floor(num / 10); 
    }

    
    console.log("Sum of digits:", sum);
