import React from "react";
import { createUseStyles } from "react-jss";
import styles from "./FormsControlsStyles";
import { Field } from "redux-form";

const useStyles = createUseStyles(styles);


export const FormControl = ({input, meta: {touched, error}, children}) => {
  const classes = useStyles();
  const hasError = touched && error;
  return (
    <div className={`${classes.formControl} ${hasError ? classes.error : ''}`} >
      <div>
      {children}
      </div>
      { hasError && <span>{error}</span> }
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
 return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
 return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
  <div>
  <Field placeholder={placeholder} name={name} 
        validate={validators}
        component={component}
        {...props}
        /> {text}     
</div>
)
