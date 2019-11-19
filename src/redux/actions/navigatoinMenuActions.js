import { ALL_ACTIONS } from "./constant";

export const setCurrentMenu = currentMenuPosition => {
  return {
    type: ALL_ACTIONS.currentMenu,
    payload: currentMenuPosition
  };
};

export const getCurrentMenuPosition = state => {
  return state.currentMenu;
};
