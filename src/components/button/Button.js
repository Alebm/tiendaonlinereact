import "./Button.css";

const Button = ({ disable, click, label }) => {
  return (
    <button disabled={disable}  onClick={click} className="button" >
      {label}
    </button>
  );
};

export default Button;
