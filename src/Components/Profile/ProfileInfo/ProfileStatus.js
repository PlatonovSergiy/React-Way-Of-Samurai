import React from "react";
import styles from "./ProfileInfoStyles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(styles);

class ProfileStatus extends React.Component {
  
  state = {
    editMode: false,
    status: this.props.status
  }

activatedEditMode = () => {
   this.setState( {
   editMode: true
   });
}

deactivatedEditMode = () => {
   this.setState( {
   editMode: false
   });
   this.props.updateStatus(this.state.status);
}

onStatusChange = (e) => {
  this.setState({
    status: e.currentTarget.value
  });
  
}

componentDidUpdate(prevProps, prevState) {
  if (prevProps.status !== this.props.status) {
  this.setState({
    status: this.props.status
  })
}
}
  render() {
  console.log('render');

    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span  onDoubleClick={ this.activatedEditMode}>{this.props.status  || '-------'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivatedEditMode} value={this.state.status} />
          </div>
        }
      </div>

    );
  };
}

export default ProfileStatus;
