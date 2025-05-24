import React, { useState } from "react";
import "./Project4.css";

function Project4() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div className="counter-container">
        <h2>Live Character Counter</h2>
        <textarea
          placeholder="Type here..."
          value={text}
          onChange={handleChange}
          rows={5}
          maxLength={500}
        />
        <div className="controls">
          <button onClick={handleClear} className="clear-btn" disabled={!text.trim()}>
            Clear
          </button>
          <p className="char-count">Character count: {text.length}</p>
        </div>
        {!text.trim() && (
          <p className="warning">Please type something to see the count.</p>
        )}
      </div>
    </>
  );
}

export default Project4;
