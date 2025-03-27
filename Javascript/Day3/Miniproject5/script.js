// Stored credentials (for demonstration purposes)
const storedUsername = "admin";
const storedPassword = "password123";

// Get user input
let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

// Check credentials
if (username === storedUsername && password === storedPassword) {
    console.log("Login successful!");
} else {
    console.log("Invalid credentials!");
}