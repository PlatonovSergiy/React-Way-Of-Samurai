import React from "react";
import styles from "./ProfileInfoStyles";
import { createUseStyles } from "react-jss";
import ProfileStatus from "./ProfileStatus";
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const useStyles = createUseStyles(styles);

const ProfileInfo = ({profile, status, updateStatus}) => {
  const classes = useStyles();
  if (!profile) {
    return <Preloader />
  }

  return (
    <div className={classes.content}>
  
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large} alt=""/>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

        </div>
    </div>
  );
};

export default ProfileInfo;
