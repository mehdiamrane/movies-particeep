const moviesReducer = (state = { all: [], displayed: [] }, action) => {
  let stateCopy = { all: [], displayed: [] };
  switch (action.type) {
    case 'LOAD_MOVIES':
      stateCopy = { ...state };
      stateCopy.all = action.payload;
      return stateCopy;

    case 'SET_DISPLAYED_MOVIES':
      stateCopy = { ...state };
      stateCopy.displayed = action.payload;
      return stateCopy;

    case 'DELETE_MOVIE':
      stateCopy = { ...state };
      const newStateCopyAll = stateCopy.all.filter(
        movie => movie.id !== action.payload
      );
      const newStateCopy = {
        all: newStateCopyAll,
        displayed: stateCopy.displayed,
      };
      return newStateCopy;

    case 'LIKE_MOVIE':
      stateCopy = { ...state };
      const targetMovieId = stateCopy.all.findIndex(
        movie => movie.id === action.payload
      );
      const targetMovie = stateCopy.all[targetMovieId];
      // Changes likes/dislikes count. Depends if the user already liked the movie or not (isLiked).
      if (targetMovie.isLiked === undefined) {
        targetMovie.likes += 1;
      } else if (targetMovie.isLiked) {
        targetMovie.likes -= 1;
        targetMovie.dislikes += 1;
      } else {
        targetMovie.likes += 1;
        targetMovie.dislikes -= 1;
      }

      targetMovie.isLiked = !targetMovie.isLiked;

      return stateCopy;

    default:
      return state;
  }
};

export default moviesReducer;
