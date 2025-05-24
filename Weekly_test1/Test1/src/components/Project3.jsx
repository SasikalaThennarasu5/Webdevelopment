import React, { useState } from "react";
import "./Project3.css";

function Project3({ name }) {
  const [age, setAge] = useState(0);
  const [warning, setWarning] = useState("");

  const increaseAge = () => {
    if (!name || name.trim() === "") {
      setWarning("Name prop is missing or empty!");
      return;
    }
    setWarning("");
    setAge((prev) => prev + 1);
  };

  const clearAge = () => {
    setAge(0);
    setWarning("");
  };

  return (
    <>
      <div className="age-card">
        <h2>{name || "No Name Provided"}</h2>
        {warning && <p className="warning">{warning}</p>}
        <p>
          Age: <span className="age-number">{age}</span>
        </p>
        <div className="buttons">
          <button onClick={increaseAge}>Increase Age</button>
          <button onClick={clearAge} className="clear-btn">
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default Project3;
