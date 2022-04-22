import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/ui";

export const openSideMenu = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.OPEN_SIDEBAR,
    });
  };
};

export const closeSideMenu = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CLOSE_SIDEBAR,
    });
  };
};
