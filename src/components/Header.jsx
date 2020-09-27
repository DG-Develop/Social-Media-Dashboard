import React, { useRef } from "react";

import "./styles/Header.scss";

const Header = ({ theme }) => (
  <header className="Header">
    <div className="Header__Container">
      <div className="Header__Title">
        <h1 className="Header__Title--h1">Social Media Dashboard</h1>
        <strong className="Header__Title--strong">
          Total Followers: 23,004
        </strong>
      </div>

      <hr className="separator" />

      <div className="Header__Mode">
        <strong className="Header__Mode--strong">Dark Mode</strong>
        <input type="checkbox" id="checkbox" onChange={theme} />
        <label className="Header__Mode--toogle" htmlFor="checkbox"></label>
      </div>
    </div>
  </header>
);

export default Header;
