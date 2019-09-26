import { combineReducers } from 'redux';
import films from './films';
import people from './people';

export default combineReducers({ films, people });