import "./Button.css";

const Button = ({ disable, click, color, label }) => {
  return (
    <button disabled={disable}  onClick={click} className="button" style={{ color: color }}>
      {label}
    </button>
  );
};

export default Button;
