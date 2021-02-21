import {userConstants} from '../../constants/user.constants'
import {fetchAuth,fetchProjs} from '../../operations/user.operations'



export function login(email, password) {
    return dispatch => {
  
      dispatch(setLoginPending(true));
      dispatch(setLoginSuccess(false));
      dispatch(setLoginError(null));
  
      fetchAuth(email, password)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(setLoginSuccess(res,true));
          dispatch(setLoginPending(false));
  
      })
      .catch(error => {
          dispatch(setLoginError(error));
      })
    }
  }
  
  function setLoginPending(isLoginPending) {
    return {
      type: userConstants.SET_LOGIN_PENDING,
      isLoginPending
    };
  }
  
  function setLoginSuccess(response,isLoginSuccess) {
    return {
      type: userConstants.SET_LOGIN_SUCCESS,
      response,
      isLoginSuccess
    };
  }
  
  function setLoginError(loginError) {
    return {
      type: userConstants.SET_LOGIN_ERROR,
      loginError
    }
  }

  

export function fetchProjects(token) {
  return dispatch => {
    dispatch(fetchProjectsPending(true));
    dispatch(fetchProjectsSuccess(false));
    dispatch(fetchProjectsError(null));

    fetchProjs(token)
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            throw(res.error);
        }
        dispatch(fetchProjectsSuccess(res,true));
        dispatch(fetchProjectsPending(false));

    })
    .catch(error => {
        dispatch(fetchProjectsError(error));
    })
  }
}


function fetchProjectsPending(isFetchPending) {
  return {
    type: userConstants.FETCH_PROJS_PENDING,
    isFetchPending
  };
}



function fetchProjectsSuccess(response,isFetchSuccess) {
  return {
    type: userConstants.FETCH_PROJS_SUCCESS,
    isFetchSuccess,
    response      
  };
}

function fetchProjectsError(isFetchError) {
  return {
    type: userConstants.FETCH_PROJS_ERROR,
    isFetchError
  }
}
