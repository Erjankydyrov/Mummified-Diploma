import "./Logo.css";
import logo from "../../../assets/logo.svg"

function Logo() {
  return (
    <div className="Logo">
      <img src={logo} alt="img" />
    </div>
  );
}

export default Logo;