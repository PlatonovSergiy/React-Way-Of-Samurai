import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import styles from './AppStyles';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/Login';
import { connect } from 'react-redux';
import Preloader from './Components/Common/Preloader/Preloader';
import {initializeApp} from './redux/app-reducer';
const useStyles = createUseStyles(styles)
//const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
//const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer')); 

function App(props) {
  const classes = useStyles();

  useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.initialized) {
return <Preloader />
  }

  return (
    <div className={classes.appWrapper}>
      <HeaderContainer />
      <Navbar />
      <div className={classes.appWrapperContent}>
        <Routes>
          <Route path="/dialogs" 
          element={ <DialogsContainer /> }/>
          <Route path='/profile/:userId?' 
          element={<ProfileContainer /> } />
          
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized:  state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App);

