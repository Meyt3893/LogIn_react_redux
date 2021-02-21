import { combineReducers } from 'redux';
import reducer from './reducer';
import projectsReducer from './reducer';


const rootReducer = combineReducers({
  reducer,
  projectsReducer
  });
  
  export default rootReducer;