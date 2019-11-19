import { ALL_ACTIONS } from "../actions/constant";

const initialState = {
  currentMenu: 2
};

export var navigationMenuReducers = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ACTIONS.currentMenu:
      var updatedState = Object.assign({}, state);
      return {
        ...updatedState,
        currentMenu: action.payload
      };
    default:
      return state;
  }
};
