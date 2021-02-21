import { combineReducers } from 'redux';
import reducer from './reducer';
import projectsReducer from './projectsReducer';


const rootReducer = combineReducers({
  reducer,
  projectsReducer
  });
  
  export default rootReducer;