import classes from "./Footer.module.css";
import Logo from "../ui/Logo/Logo";

function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className="container">
        <Logo />
        WarGaming 2022
      </div>
    </footer>
  );
}

export default Footer;
