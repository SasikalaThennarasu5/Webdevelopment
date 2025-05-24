import React, { useState } from "react";
import "./Project2.css";

function Project2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");

  const handleToggle = () => {
    if (!isLoggedIn) {
      // Trying to login: validate username not empty
      if (input.trim() === "") {
        alert("Please enter a username to login.");
        return;
      }
      setUsername(input.trim());
      setIsLoggedIn(true);
      setInput("");
    } else {
      // Logout
      setIsLoggedIn(false);
      setUsername("");
    }
  };

  const handleClear = () => {
    setIsLoggedIn(false);
    setUsername("");
    setInput("");
  };

  return (
    <>
      <div className="login-container">
        <h2>Login Status Toggle</h2>

        {!isLoggedIn && (
          <input
            type="text"
            placeholder="Enter username"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        )}

        <button onClick={handleToggle} className="toggle-btn">
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        <button onClick={handleClear} className="clear-btn">
          Clear
        </button>

        <div className="message">
          {isLoggedIn ? (
            <p>Welcome, <strong>{username}</strong>! You are logged in.</p>
          ) : (
            <p>Please login.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Project2;
