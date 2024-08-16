import { assets } from "../../assets/assets";
import * as HeroIcons from "@heroicons/react/24/solid";
import "../Navbar/Navbar.css";

//rrd imports
// import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../../Context/StoreContext";
import { NavLink } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const { CartItems } = useContext(StoreContext);
  return (
    <header className="navbar">
      <NavLink to={"/"}>
        <img src={assets.logo1} alt="Food delivery logo" className="logo" />
      </NavLink>

      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="menu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <a href="#app-download">Mobile-app</a>
        </li>
        <li>
          <a href="#footer">Contact-us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="searchIcon" />
        <div className="navbar-search-icon">
          <NavLink to="/cart">
            <HeroIcons.ShoppingCartIcon className="nav-cart" />
          </NavLink>
          {CartItems.length !== 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
      {/* <HeroIcons.Bars3Icon width={30} className="hamburger" /> */}
    </header>
  );
};

export default Navbar;
