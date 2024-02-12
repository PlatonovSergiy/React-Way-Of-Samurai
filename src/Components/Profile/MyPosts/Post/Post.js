import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./PostStyles"; 

const useStyles = createUseStyles(styles);

const Post = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qdmawnIN4-isdPvJHNF-UlBBykb5HIUEjA&usqp=CAU"
        alt="ava"
      />
      {props.message}
      <div>
        <span>like</span>{props.likesCount}
      </div>
    </div>
  );
};

export default Post;
