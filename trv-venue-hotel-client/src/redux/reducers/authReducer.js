import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INTIAL_STATE = {
  isSignedIn: "Jon Doe",
  userId: 1
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
  
    default:
      return state;
  }
};
