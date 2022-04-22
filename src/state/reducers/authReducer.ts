import { User } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../actions/auth";

interface AuthState {
  checking: Boolean;
  id: string | null;
  name: string | null;
  role: string | null;
  users: User[];
}

const initialState: AuthState = {
  checking: true,
  id: null,
  name: null,
  role: null,
  users: [],
};

export const authReducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case ActionType.AUTH_LOGIN:
      return { ...state, ...action.payload, checking: false };

    case ActionType.AUTH_CHECKING_FINISH:
      return { ...state, checking: false };

    case ActionType.AUTH_LOGOUT:
      return { checking: false, id: null, name: null, role: null, users: [] };

    case ActionType.NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case ActionType.GET_USERS:
      return { ...state, users: [...action.payload] };

    case ActionType.DELETE_USER:
      return {
        ...state,
        users: state.users?.filter((user) => user.id !== action.payload.id),
      };

    case ActionType.UPDATE_USER:
      return {
        ...state,
        users: state.users?.map((user) =>
          user.id === action.payload.id ? { ...action.payload } : user
        ),
      };

    default:
      return state;
  }
};
