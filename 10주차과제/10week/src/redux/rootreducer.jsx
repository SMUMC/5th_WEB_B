import { combineReducers } from 'redux';
import user from './userSlice';
import postSlice from './postSlice';

const rootReducer = combineReducers({
  user: user,
  post: postSlice.reducer,
});
export default rootReducer;