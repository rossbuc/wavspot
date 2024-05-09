import { useState } from "react";
import Home from "./components/home";

import "./App.css";
import Feed from "./components/feed";
import Trending from "./components/trending";
import DailyDigs from "./components/dailyDigs";

function App() {
  const [leftNavbarShown, setLeftNavbarShown] = useState<boolean>(false);
  const [rightNavbarShown, setRightNavbarShown] = useState<boolean>(false);
  const [selectedNav, setSelectedNav] = useState<JSX.Element | null>(null);

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
                <li onClick={() => setSelectedNav(Home)}>Home</li>
                <li onClick={() => setSelectedNav(Feed)}>Feed</li>
                <li onClick={() => setSelectedNav(Trending)}>Trending</li>
                <li onClick={() => setSelectedNav(DailyDigs)}>DailyDigs</li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
          {selectedNav}
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
