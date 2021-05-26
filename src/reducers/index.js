import categoriesReducer from './categoriesReducer';
import moviesReducer from './moviesReducer';
import elementsPerPageReducer from './elementsPerPageReducer';
import paginationReducer from './paginationReducer';
import userPreferencesReducer from './userPreferencesReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  movies: moviesReducer,
  elementsPerPage: elementsPerPageReducer,
  pagination: paginationReducer,
  categories: categoriesReducer,
  userPreferences: userPreferencesReducer,
});

export default allReducers;
