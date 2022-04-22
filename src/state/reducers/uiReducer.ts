import { ActionType } from "../action-types";
import { Action } from "../actions/ui";

interface UIState {
  sidemenuOpen: boolean;
}

const initialState: UIState = {
  sidemenuOpen: false,
};

export const uiReducer = (
  state: UIState = initialState,
  action: Action
): UIState => {
  switch (action.type) {
    case ActionType.OPEN_SIDEBAR:
      return {
        ...state,
        sidemenuOpen: true,
      };

    case ActionType.CLOSE_SIDEBAR:
      return {
        ...state,
        sidemenuOpen: false,
      };

    default:
      return state;
  }
};
