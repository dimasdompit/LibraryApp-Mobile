import {combineReducers} from 'redux';
import auth from './auth';
import books from './books';
import transaction from './transaction';
import genres from './genres';

export default combineReducers({auth, books, transaction, genres});
