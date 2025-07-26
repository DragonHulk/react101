// App.js
import React, { useState } from "react";
import "./App.css";
import ball from "./handdrawn-ball.png"

function App() {
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const ballDistance = Math.min(password.length * 10, 250); // max move
  const ballRotation = password.length * 30; // rotate 20deg per character
  const fillWidth = ballDistance + 5;

  return (
    <div className="container">

      <h2>Password Tracker</h2>
      <input
        type="text"
        value={username}
        onChange={handleUserNameChange}
        placeholder="Type your username"
        className="username-field"
      />

      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Type your password"
        className="password-field"
        maxLength={20}
      />

      <div className="ball-holder">
        <div className="ball-track">
          <div
            className="ball-fill"
            style={{ width: `${fillWidth}px` }}
          />
          <img
            src={ball}
            alt="Hand-drawn Ball"
            className="ball-img"
            style={{
              transform: `translateX(${ballDistance}px) rotate(${password.length * 20}deg)`
            }}
          />
        </div>
      </div>
      

    </div>
  );
}

export default App;
