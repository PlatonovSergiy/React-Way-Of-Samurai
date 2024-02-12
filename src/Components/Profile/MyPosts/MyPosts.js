import React from "react";
import styles from "./MyPostsStyles";
import Post from "./Post/Post";
import { createUseStyles } from "react-jss";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const useStyles = createUseStyles(styles);



const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}> 
        <div>
          <Field name='newPostText' component={Textarea} placeholder={"Post message"} validate={[required, maxLength10]} />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
  )
}

let AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm); 

const MyPosts = React.memo(props => {
  console.log('RENDER YO');
  const classes = useStyles();

  let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>
      my posts
      </h3>
      <AddNewPostReduxForm onSubmit={onAddPost}/>
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  );
  } );



export default MyPosts;
