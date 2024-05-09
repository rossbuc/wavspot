import { useState } from "react";

import "./App.css";

function App() {
  const [leftNavbarShown, setLeftNavbarShown] = useState(false);
  const [rightNavbarShown, setRightNavbarShown] = useState(false);

  return (
    <>
      <div className="container">
        <header className="header">
          <div
            className="header-logo"
            onClick={() => setLeftNavbarShown(!leftNavbarShown)}
          >
            <img
              src="src/assets/icons8-wave-64.png"
              className="logo-image"
            ></img>
            <h1>wavspot</h1>
          </div>
          <div
            className="user-info"
            onClick={() => setRightNavbarShown(!rightNavbarShown)}
          >
            <img
              src="src/assets/icons8-user-30.png"
              className="user-cover-picture"
            ></img>
            <h3>username</h3>
          </div>
        </header>
        <main>
          {leftNavbarShown ? (
            <div className="navbar--main">
              <ul>
                <li>Home</li>
                <li>Feed</li>
                <li>Trending</li>
                <li>DailyDigs</li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
          <div className="content-display"></div>
          {rightNavbarShown ? (
            <div className="navbar--user">
              <ul>
                <li>Collection</li>
                <li>Uploads</li>
                <li>Messages</li>
                <li>WavTokens</li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
