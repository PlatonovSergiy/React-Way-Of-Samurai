import React from "react";
import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";
import styles from "./NavbarStyles";

const useStyles = createUseStyles(styles);

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs">
          Messages
        </NavLink>
        </div>
      <div className={classes.item}>
        <NavLink to="/users">
          Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news">
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music">
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
