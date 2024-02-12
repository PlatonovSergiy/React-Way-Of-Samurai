import React from 'react';
import userPhoto from '../../../src/asses/images/user.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../Common/Paginator.js/Paginator';
import styles from './UsersStyles';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles(styles);

const User = ({user, followingInProgress, unfollow, follow}) => {

  const classes = useStyles();

  return (
    <div>
          <span>
            <div>
              <NavLink
                to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.userPhoto} />
              </NavLink>
            </div>
            <div>

              {user.followed
                ? <button disabled={followingInProgress
                  .some(id => id === user.id)} 
                  onClick={() => {unfollow(user.id)}}
                  >Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)} 
                onClick={() => {follow(user.id)}}
               >Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{'u.location.city'}</div>
              <div>{'u.location.country'}</div>
            </span>

          </span>
        </div>
        )}


export default User;