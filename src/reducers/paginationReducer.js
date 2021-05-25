const paginationReducer = (state = { current: 1, max: 1 }, action) => {
  let stateCopy = { current: 1, max: 1 };
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      stateCopy = { ...state };
      stateCopy.current = action.payload;
      return stateCopy;
    case 'SET_MAX_PAGE':
      stateCopy = { ...state };
      const roundedPayload = Math.ceil(action.payload);
      stateCopy.max = roundedPayload;
      if (stateCopy.current > roundedPayload) {
        stateCopy.current = roundedPayload;
      }
      return stateCopy;
    default:
      return state;
  }
};

export default paginationReducer;
