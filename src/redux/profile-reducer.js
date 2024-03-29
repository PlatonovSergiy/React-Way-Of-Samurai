import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';


let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: '14' },
    { id: 2, message: 'It\'s my first post', likesCount: '15' },
    { id: 1, message: 'Hi', likesCount: '16' },
    { id: 2, message: 'yo', likesCount: '17' },
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost],
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
      case SET_USER_PROFILE:
    return {
      ...state, profile: action.profile,
    };

      case DELETE_POST:
    return {
      ...state, posts: state.posts.filter(p => p.id != action.postId),
    }

    default:
      return state;
  };
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST, newPostText
});



export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE, profile
});

export const setStatus = (status) => ({
  type: SET_STATUS, status
});

export const deletePost = (postId) => ({
  type: DELETE_POST, postId
});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
    }
};

export default profileReducer;
