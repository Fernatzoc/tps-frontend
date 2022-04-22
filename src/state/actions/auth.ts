import { User } from "../../interfaces";
import { ActionType } from "../action-types";

interface authLogin {
  type: ActionType.AUTH_LOGIN;
  payload: { id: string; name: string; role: string };
}

interface checkingFinish {
  type: ActionType.AUTH_CHECKING_FINISH;
}

interface authRegister {
  type: ActionType.AUTH_START_REGISTER;
  payload: { id: string; name: string; role: string };
}

interface authLogout {
  type: ActionType.AUTH_LOGOUT;
}

interface usersStartLoading {
  type: ActionType.GET_USERS;
  payload: User[];
}

interface deleteUser {
  type: ActionType.DELETE_USER;
  payload: { id: string };
}

interface updateUser {
  type: ActionType.UPDATE_USER;
  payload: User;
}

interface newUser {
  type: ActionType.NEW_USER;
  payload: User;
}

export type Action =
  | authLogin
  | checkingFinish
  | authLogout
  | authRegister
  | usersStartLoading
  | deleteUser
  | updateUser
  | newUser;
