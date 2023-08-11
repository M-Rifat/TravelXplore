import React, { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">TravelXplore.</h1>
      

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.cName}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}


        {isAuthenticated && <p className="nav-links Nfont">{user.nickname}</p>}

        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            {" "}
            Log Out{" "}
          </button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
