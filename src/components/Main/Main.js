import classes from "./Main.module.css"

function Main({ children }) {
  return ( 
    <div className={classes.Main}>
      {children}
    </div>
  );
}

export default Main;