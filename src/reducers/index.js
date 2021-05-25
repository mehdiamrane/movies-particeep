import categoriesReducer from './categoriesReducer';
import moviesReducer from './moviesReducer';
import elementsPerPageReducer from './elementsPerPageReducer';
import paginationReducer from './paginationReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  movies: moviesReducer,
  elementsPerPage: elementsPerPageReducer,
  pagination: paginationReducer,
  categories: categoriesReducer,
});

export default allReducers;
