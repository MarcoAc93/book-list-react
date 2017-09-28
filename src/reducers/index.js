import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';
import ActiveBookReducer from './reducer-active-book';

// Aqui nada mas juntas todos los reducers para crear el state de la app
const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBookReducer
});

export default rootReducer;