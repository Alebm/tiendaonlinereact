import "./Navbar.css";
import "../button/Button.js";
//import Button from "../button/Button.js";
import CartWidget from "../cart/CartWidget";

import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="Navbar">
      <div>
        <p className="ParNav" >Shop OnLine</p>
      </div>
      <div>
        <Link className="button" to={'/category/Outlets'}>Outlets</Link>
      </div>
      <div>
        <Link className="button" to={'/category/News'}>News</Link>
      </div>
      <div>
        <Link className="button" to={'/category/Collections'}>Collections</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
