import initialState from '../initialState';
import {userConstants} from '../constants/user.constants'



export default function reducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case userConstants.SET_LOGIN_SUCCESS:{
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess,
        userData: action.response
      });
    }
      

    case userConstants.SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
};
