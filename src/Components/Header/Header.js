import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./HeaderStyles";
import { NavLink } from "react-router-dom";

const useStyles = createUseStyles(styles);

const Header = (props) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <img 
        src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?size=626&ext=jpg&ga=GA1.2.880296593.1693309110&semt=ais"
        alt="logo"
      />
      <div className={classes.loginBlock}>
{props.isAuth 
? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
: <NavLink to={'/login'}>
  Login
</NavLink> }

      </div>
    </header>
  );
};

export default Header;
