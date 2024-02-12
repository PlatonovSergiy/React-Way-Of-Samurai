import React from 'react';
import styles from './UsersStyles';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
import userPhoto from  '../../../src/asses/images/user.png';

const useStyles = createUseStyles(styles);

let Users = (props) => {

  const classes = useStyles();

  const getUsers = () => {

if (props.users.length === 0) {

  axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => { 
    props.setUsers(response.data.items);
  });
}
}

  return (
  <div>
<button onClick={getUsers}>Get users</button> 
      {
      props.users.map( u => <div key={u.id}>
<span>
  <div>
    <img src={u.photos.small != null ? u.photos.small : userPhoto } className={classes.userPhoto} />
  </div>
  <div>
    { u.followed ? <button onClick={ () => { props.unfollow(u.id) } }>unFollow</button> : <button onClick={ () => { props.follow(u.id) } } >Follow</button> }
  </div>
</span>
<span>
  <span>
    <div>{u.fullName}</div>
    <div>{u.status}</div>
  </span>
  <span>
  <div>{'u.location.city'}</div>
    <div>{'u.location.country'}</div>
  </span>
</span>
      </div>)}
    </div>
  );
};

export default Users;