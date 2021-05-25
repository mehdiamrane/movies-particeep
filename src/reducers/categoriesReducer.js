const categoriesReducer = (state = { selected: [], all: [] }, action) => {
  let stateCopy = { selected: [], all: [] };
  switch (action.type) {
    case 'SET_ALL_CATEGORIES':
      stateCopy = { ...state };
      stateCopy.all = action.payload;
      stateCopy.selected.forEach((selectedCategory, i) => {
        !action.payload.includes(selectedCategory) &&
          stateCopy.selected.splice(i, i + 1);
      });
      return stateCopy;

    case 'ADD_SELECTED_CATEGORY':
      stateCopy = { ...state };
      stateCopy.selected = [...stateCopy.selected, action.payload];
      return stateCopy;

    case 'REMOVE_SELECTED_CATEGORY':
      stateCopy = { ...state };
      const newStateCopySelected = stateCopy.selected.filter(
        category => category !== action.payload
      );
      const newStateCopy = {
        selected: newStateCopySelected,
        all: stateCopy.all,
      };
      return newStateCopy;

    case 'RESET_SELECTED_CATEGORIES':
      stateCopy = { ...state };
      stateCopy.selected = [];
      return stateCopy;

    default:
      return state;
  }
};

export default categoriesReducer;
