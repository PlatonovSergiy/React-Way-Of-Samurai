import React from "react";
import styles from "./MessagesStyles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(styles);

const Message = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.dialog}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qdmawnIN4-isdPvJHNF-UlBBykb5HIUEjA&usqp=CAU"
        alt="ava"
      />
      {props.message}</div>
  );
};

export default Message;
