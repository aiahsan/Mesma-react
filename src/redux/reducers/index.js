import {combineReducers} from 'redux';
import {user,users} from './user';
import {articles} from './articles'
export default combineReducers({
  user,
  users,
  articles
  });
  

