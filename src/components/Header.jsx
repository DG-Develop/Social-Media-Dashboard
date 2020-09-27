import React from "react";

import "./styles/Header.scss";

const Header = () => (
  <header className="Header">
    <div className="Header__Container">
      <div className="Header__Title">
        <h1 className="Header__Title--h1">Social Media Dashboard</h1>
        <strong className="Header__Title--strong">
          Total Followers: 23,004
        </strong>
      </div>

      <div className="Header__Mode">
        <strong className="Header__Mode--strong">Dark Mode</strong>
        <input className="Disable__None" type="checkbox" id="checkbox"/>
        <label className="Header__Mode--toogle" htmlFor="checkbox"></label>
      </div>
    </div>
  </header>
);

export default Header;
