import { combineReducers } from 'redux';
import films from './films';
import people from './people';
import tasks from './tasks';

export default combineReducers({
  films,
  people,
  tasks,
});