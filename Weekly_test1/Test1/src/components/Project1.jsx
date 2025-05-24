import React, { useState } from "react";
import "./Project1.css";

const initialItems = [
  { name: "Apple", image: "https://img.icons8.com/color/48/apple.png", quantity: 1, price: 2 },
  { name: "Banana", image: "https://img.icons8.com/color/48/banana.png", quantity: 1, price: 1 },
  { name: "Orange", image: "https://img.icons8.com/color/48/orange.png", quantity: 1, price: 2 },
  { name: "Mango", image: "https://img.icons8.com/color/48/mango.png", quantity: 1, price: 3 },
  { name: "Grapes", image: "https://img.icons8.com/color/48/grapes.png", quantity: 1, price: 2 },
  { name: "Tomato", image: "https://img.icons8.com/color/48/tomato.png", quantity: 1, price: 1 },
  { name: "Carrot", image: "https://img.icons8.com/color/48/carrot.png", quantity: 1, price: 1 },
  { name: "Onion", image: "https://img.icons8.com/color/48/onion.png", quantity: 1, price: 1 },
  { name: "Broccoli", image: "https://img.icons8.com/color/48/broccoli.png", quantity: 1, price: 2 },
  { name: "Cucumber", image: "https://img.icons8.com/color/48/cucumber.png", quantity: 1, price: 1 },
  { name: "Milk", image: "https://img.icons8.com/color/48/milk.png", quantity: 1, price: 2 },
  { name: "Egg", image: "https://img.icons8.com/color/48/egg.png", quantity: 1, price: 0.5 },
  { name: "Bread", image: "https://img.icons8.com/color/48/bread.png", quantity: 1, price: 1.5 },
  { name: "Sugar", image: "https://img.icons8.com/color/48/sugar-cube.png", quantity: 1, price: 1 },
  { name: "Tea", image: "https://img.icons8.com/color/48/tea.png", quantity: 1, price: 1 },
  { name: "Coffee", image: "https://img.icons8.com/color/48/coffee.png", quantity: 1, price: 2 }
];

function Project1() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleAdd = () => {
    if (!input.trim()) {
      setError("Please enter an item.");
      return;
    }
    const found = initialItems.find((item) => item.name.toLowerCase() === input.trim().toLowerCase());
    if (found) {
      setItems([...items, { ...found }]);
      setError("");
    } else {
      setError("Item not found in the available grocery list.");
    }
    setInput("");
  };

  const handleClear = () => {
    setItems([]);
    setError("");
  };

  const increaseQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
  };

  const decreaseQuantity = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setItems(updatedItems);
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleDropdownSelect = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="grocery-container">
        <h2>Grocery List App 🛒</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter grocery item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <select onChange={handleDropdownSelect} value={input}>
            <option value="">-- Select Item --</option>
            {initialItems.map((item, idx) => (
              <option key={idx} value={item.name}>{item.name}</option>
            ))}
          </select>
          <button onClick={handleAdd}>Add</button>
          <button className="clear-btn" onClick={handleClear} disabled={items.length === 0}>Clear</button>
        </div>
        {error && <p className="error">{error}</p>}

        {items.length > 0 && (
          <div className="grocery-list">
            {items.map((item, index) => (
              <div className="grocery-item" key={index}>
                <img src={item.image} alt={item.name} className="item-icon" />
                <div className="item-details">
                  <p><strong>{item.name}</strong></p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(index)}>-</button>
                    <span>Qty: {item.quantity}</span>
                    <button onClick={() => increaseQuantity(index)}>+</button>
                  </div>
                  <p>Price per item: ${item.price.toFixed(2)}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                  <button className="delete-btn" onClick={() => deleteItem(index)}>
                    <span role="img" aria-label="delete">🗑️</span> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="total">Total: ${calculateTotal()}</div>
        )}
      </div>
    </>
  );
}

export default Project1;
