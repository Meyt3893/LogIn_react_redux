
import initialState from '../initialState';
import {userConstants} from '../constants/user.constants'


export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
      case userConstants.FETCH_PROJS_PENDING:
        return Object.assign({}, state, {
          fetchProjPending: action.isFetchPending
        });
      case userConstants.FETCH_PROJS_SUCCESS:{
        return Object.assign({}, state, {
          fetchProjSuccess: action.isFetchSuccess,
          projectsData: action.response
          
        });
      } 
      case userConstants. FETCH_PROJS_ERROR:
        return Object.assign({}, state, {
          fetchProjError: action.isFetchError
        });
  
      default:
        return state;
    }
  }