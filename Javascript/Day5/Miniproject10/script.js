let groceryList = [];

// Function to add an item to the grocery list
function addItem(item) {
    if (item.trim() !== "") {
        groceryList.push(item.trim());
        console.log(`${item} added to the grocery list.`);
    } else {
        console.log("Invalid item. Please enter a valid grocery item.");
    }
}

// Function to view all items in the grocery list using a for loop
function viewItems() { 
    if (groceryList.length === 0) {
        console.log("Your grocery list is empty.");
    } else {
        console.log("Grocery List:");
        for (let i = 0; i < groceryList.length; i++) {  ``
            console.log(`${i + 1}. ${groceryList[i]}`);
        }
    }
}

// Function to remove an item from the grocery list using a for loop
function removeItem(item) {
    let found = false;
    for (let i = 0; i < groceryList.length; i++) {
        if (groceryList[i] === item.trim()) {
            groceryList.splice(i, 1);
            console.log(`${item} removed from the grocery list.`);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log(`${item} not found in the grocery list.`);
    }
}

// Example usage:
addItem("Milk");
addItem("Eggs");
addItem("Bread");
viewItems(); // Displays the list
removeItem("Eggs");
viewItems(); // Displays updated list
