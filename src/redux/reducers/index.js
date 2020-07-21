import {combineReducers} from 'redux';
import auth from './auth';
import books from './books';
import transaction from './transaction';

export default combineReducers({auth, books, transaction});
