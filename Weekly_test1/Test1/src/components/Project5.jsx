import React, { useState } from "react";
import "./Project5.css";

function Project5() {
  const [selectedFruit, setSelectedFruit] = useState("");

  const handleChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  const handleClear = () => {
    setSelectedFruit("");
  };

  return (
    <>
      <div className="fruit-selector-container">
        <h2>Favorite Fruit Selector</h2>
        <select value={selectedFruit} onChange={handleChange}>
          <option value="">-- Select a fruit --</option>
          <option value="Apple">Apple 🍎</option>
          <option value="Banana">Banana 🍌</option>
          <option value="Mango">Mango 🥭</option>
          <option value="Orange">Orange 🍊</option>
          <option value="Grapes">Grapes 🍇</option>
        </select>
        <div className="controls">
          <button onClick={handleClear} disabled={!selectedFruit} className="clear-btn">
            Clear
          </button>
        </div>
        {selectedFruit ? (
          <p className="selected-fruit">Your favorite fruit is: <strong>{selectedFruit}</strong></p>
        ) : (
          <p className="warning">Please select a fruit.</p>
        )}
      </div>
    </>
  );
}

export default Project5;
