import React from "react";
import styles from "./DialogsStyles";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";

const useStyles = createUseStyles(styles);

const DialogItem = (props) => {
  const classes = useStyles();
  let path = '/dialogs/' + props.id;
  return (
    <div className={classes.dialog}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qdmawnIN4-isdPvJHNF-UlBBykb5HIUEjA&usqp=CAU"
        alt="ava"
      />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
