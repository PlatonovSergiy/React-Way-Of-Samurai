import React from "react";
import styles from "./DialogsStyles";
import { createUseStyles } from "react-jss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const useStyles = createUseStyles(styles);



const Dialogs = (props) => {

  const classes = useStyles();
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />);
  let newMessageBody = props.dialogsPage.newMessageBody;

let addNewMessage = (values) => {
props.sendMessage(values.newMessageBody);
}

if(!props.isAuth) return <Navigate  to={'/login'}/>
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

// const AddMessageForm = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit}>
//           <div>
//             <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={[required, maxLength50]} />
//           </div>
//           <div>
//             <button>Send222</button>
//           </div>
//         </form>
//   )
// }

// const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
