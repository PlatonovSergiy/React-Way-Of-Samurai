import React from "react";
import styles from "./ProfileStyles";
import { createUseStyles } from "react-jss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Navigate } from "react-router-dom";

const useStyles = createUseStyles(styles);

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
