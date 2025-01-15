import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "activate" : ""}>
          {" home "}
        </li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "activate" : ""}>
          menus
        </li>
        <li className={menu === "mobile - app" ? "activate" : ""}>mobile-app</li>
        <li onClick={() => setMenu("contact us")} className="menu">
          contact uss
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sing in</button>
      </div>
    </div>
  );
};

export default Navbar;
