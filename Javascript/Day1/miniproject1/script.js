// Store and manage order details

var restaurantName = "Hotel Amirtha";
var orderNumber = 12345;
var foodItems = ["Idly", "Dosa", "Vada"];
var totalPrice = 500;
var isDelivered = false;

// Display Order Summary

console.log("Order Summary");
console.log("Restaurant: " ,restaurantName);
console.log("Order Number: " , orderNumber);
console.log("Food Items: " ,foodItems);
console.log("Total Price: Rs." ,totalPrice);
console.log("Delivery Status: " , (isDelivered ? "Delivered" : "Out for Delivery"));

// Update Order Status (delivered)

isDelivered = true;

// Display Updated Order Status

console.log("Order Status Updated:");
console.log("Delivery Status: " + (isDelivered ? "Delivered" : "Out for Delivery"));

// Support Multiple Items (Add and Remove Items)

var newFoodItems = ["Idly", "Dosa", "Vada", "Ice Cream"]; 
console.log("Updated Food Items (Added Ice Cream): " , "Idly", "Dosa", "Vada", "Ice Cream");

var removedFoodItems = ["Idly", "Dosa", "Vada"];
console.log("Updated Food Items (Removed Ice Cream): " , "Idly", "Dosa", "Vada");