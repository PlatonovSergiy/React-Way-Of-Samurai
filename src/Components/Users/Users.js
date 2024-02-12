import React from 'react';
import Paginator from '../Common/Paginator.js/Paginator';
import styles from './UsersStyles';
import { createUseStyles } from 'react-jss';
import User from './User';


const useStyles = createUseStyles(styles);

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

  const classes = useStyles();

  return (
    <div>
      <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} 
      pageSize={pageSize}
      onPageChanged={onPageChanged} />
      <div>
      {
        users.map(u => <User user={u}
          followingInProgress={props.followingInProgress} 
          key={u.id}
          unfollow={props.unfollow}
          follow={props.follow} 
          /> )
        
}
</div>
    </div>
  )

};


export default Users;