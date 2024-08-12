import { assets } from "../../assets/assets";
import * as HeroIcons from "@heroicons/react/24/solid";
import "../Navbar/Navbar.css";

//rrd imports
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <img src={assets.logo1} alt="Food delivery logo" className="logo" />

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
          <NavLink to="menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="mobile-app">Mobile-app</NavLink>
        </li>
        <li>
          <NavLink to="Contact-us">Contact-us</NavLink>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="searchIcon" />
        <div className="navbar-search-icon">
          <HeroIcons.ShoppingCartIcon width={30} />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
      {/* <HeroIcons.Bars3Icon width={30} className="hamburger" /> */}
    </header>
  );
};

export default Navbar;
