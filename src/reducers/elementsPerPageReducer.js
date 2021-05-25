const elementsPerPageReducer = (state = 4, action) => {
  switch (action.type) {
    case 'CHANGE_ELEMENTS':
      return action.payload;
    default:
      return state;
  }
};

export default elementsPerPageReducer;
