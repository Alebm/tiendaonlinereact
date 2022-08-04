import "./Navbar.css";
import "../button/Button.js";
import Button from "../button/Button.js";
import CartWidget from "../cart/CartWidget";

const Navbar = () => {
  const text = "hice click";

  const handleClick = () => {
    console.log(text);
  };

  return (
    <nav className="Navbar">
      <div>
        <p className="ParNav" >Shop OnLine</p>
      </div>
      <div>
        <Button click={handleClick} label="Outlets" color="#F6F6F6" />
      </div>
      <div>
        <Button click={handleClick} label="News" color="#F6F6F6" />
      </div>
      <div>
        <Button click={handleClick} label="Collections" color="#F6F6F6" />
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
