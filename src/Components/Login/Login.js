import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, createField } from '../Common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import styles from '../Common/FormsControls/FormsControlsStyles';

const useStyles = createUseStyles(styles);

const LoginForm = ({handleSubmit, error}) => {

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
       {createField('Email','email',[required ],Input )}
      {createField('Password','password',[required ],Input , {type: 'password'})}
      {createField(null,'rememberMe',[], Input , {type: 'checkbox'}, 'remember me')} 
      
      {error && <div className={classes.formSummaryError}>
{error}
      </div>
}
      <div><button>Login</button></div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Navigate  to={'/profile'}/>
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth 
});

export default connect(mapStateToProps, { login })(Login);