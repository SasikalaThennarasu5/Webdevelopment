// 1. Inventory Storage

let inventory = [

    { name: "Apple", quantity: 50 },
    { name: "Banana", quantity: 30 },
    { name: "Orange", quantity: 20 }
    
  ];
  
  // 2. Add Product Function

  function addProduct(name, quantity) {

    // Check if the product already exists

    const existing = inventory.find(product => product.name === name);

    if (existing) {
      existing.quantity += quantity;
    } 
    else {
      inventory.push({ name, quantity });
    }

    displayInventory();

  }
  
  // 3. Remove Product Function

  function removeProduct(name) {

    const index = inventory.findIndex(product => product.name === name);

    if (index !== -1) {
      inventory.splice(index, 1);
      console.log(`${name} removed from inventory.`);
    } 

    else {
      console.log(`${name} not found in inventory.`);
    }

    displayInventory();

  }
  
  // 4. Display Updated Inventory

  function displayInventory() {

    console.log("Updated Inventory:");

    inventory.forEach(product => {

      console.log(`- ${product.name}: ${product.quantity}`);
    });

   
  }
  
  // Sample usage:

  addProduct("Mango", 15);

  addProduct("Apple", 10); 
      
  removeProduct("Banana");

  removeProduct("Grapes");     
  