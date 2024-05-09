import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src="src/assets/icons8-wave-64.png" className="logo-image"></img>
          <h1>WavSpot</h1>
        </div>
        <div className="user-info">
          <img
            src="src/assets/icons8-user-30.png"
            className="user-cover-picture"
          ></img>
          <h3>username</h3>
        </div>
      </header>
    </>
  );
}

export default App;
