import logo from './logo.svg';
import './App.css';
import Typewriter from "./Typewriter";
import React, { useState } from "react";

function App() {
  const [showSecondLine, setShowSecondLine] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div class="scrolling-text">
            <Typewriter
             text="K yle Sullivan - Computer Science Student"
             onComplete={() => {
              <type
             }}
            />
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
