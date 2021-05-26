export const loadMovies = moviesData => {
  return {
    type: 'LOAD_MOVIES',
    payload: moviesData,
  };
};

export const setDisplayedMovies = moviesData => {
  return {
    type: 'SET_DISPLAYED_MOVIES',
    payload: moviesData,
  };
};

export const deleteMovie = id => {
  return {
    type: 'DELETE_MOVIE',
    payload: id,
  };
};

export const likeMovie = id => {
  return {
    type: 'LIKE_MOVIE',
    payload: id,
  };
};

export const setAllCategories = categoriesData => {
  return {
    type: 'SET_ALL_CATEGORIES',
    payload: categoriesData,
  };
};

export const addSelectedCategory = category => {
  return {
    type: 'ADD_SELECTED_CATEGORY',
    payload: category,
  };
};

export const removeSelectedCategory = category => {
  return {
    type: 'REMOVE_SELECTED_CATEGORY',
    payload: category,
  };
};

export const resetSelectedCategories = () => {
  return {
    type: 'RESET_SELECTED_CATEGORIES',
  };
};

export const changePage = number => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: number,
  };
};

export const setMaxPage = number => {
  return {
    type: 'SET_MAX_PAGE',
    payload: number,
  };
};

export const changeElementsPerPage = number => {
  return {
    type: 'CHANGE_ELEMENTS',
    payload: number,
  };
};

export const toggleDialogPreferences = () => {
  return {
    type: 'TOOGLE_DIALOG_PREFERENCES',
  };
};
