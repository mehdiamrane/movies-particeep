const userPreferencesReducer = (
  state = { alwaysShowConfirmationDialog: true },
  action
) => {
  let stateCopy = { alwaysShowConfirmationDialog: true };
  switch (action.type) {
    case 'TOOGLE_DIALOG_PREFERENCES':
      stateCopy = { ...state };
      stateCopy.alwaysShowConfirmationDialog =
        !stateCopy.alwaysShowConfirmationDialog;
      return stateCopy;

    default:
      return state;
  }
};

export default userPreferencesReducer;
