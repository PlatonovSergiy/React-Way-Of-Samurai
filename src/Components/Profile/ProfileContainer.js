import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { useNavigate, useParams } from 'react-router-dom';
import Profile from "./Profile";

const ProfileContainer = ({ profile, getUserProfile, isAuth, status, authorisedUserId, updateStatus, getStatus}) => {
  
  const navigate = useNavigate();
  let { userId } = useParams();
if (!userId) {
  userId = authorisedUserId;
  if (!userId) {
    navigate("/login");
  }
}

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    } else {
      getUserProfile(userId);
      getStatus(userId);
  }}, [userId, getUserProfile, getStatus, isAuth, authorisedUserId]);

  return (
    <div>
      <Profile profile={profile} status={status} updateStatus={updateStatus}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })(ProfileContainer);


/* import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import {withRouter  } from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {

    return (
      <div>
  <Profile { ...this.props} profile={this.props.profile} />
      </div>
    )
};
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile


})

let WithUrlDataContainerComponent = withRouter (ProfileContainer)

 export default connect(mapStateToProps, {getUserProfile} )(WithUrlDataContainerComponent);  */