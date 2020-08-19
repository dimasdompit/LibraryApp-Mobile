import {combineReducers} from 'redux';
import auth from './auth';
import books from './books';
import transaction from './transaction';
import genres from './genres';
import author from './author';

export default combineReducers({auth, books, transaction, genres, author});
