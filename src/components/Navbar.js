import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "./Button";

function Navbar() {
  const [button, setButton] = useState(true);

  let [click, setClick] = useState(false);

  let handleClick = () => {
    setClick(!click);
  };

  let closeMobMenu = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobMenu}>
          TOURISM <i className="bi bi-tropical-storm " />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "bi bi-x-lg " : "bi bi-list bi-list-icon"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link className="nav-links" to="/" onClick={closeMobMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-links" to="/Services" onClick={closeMobMenu}>
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-links" to="/Products" onClick={closeMobMenu}>
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-links-mobile"
              to="/Sign-up"
              onClick={closeMobMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {button && (
          <Button buttonStyle="btn--outline" buttonSize="btn--medium">
            SIGN UP
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
