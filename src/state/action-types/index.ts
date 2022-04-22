export enum ActionType {
  //Auth
  AUTH_CHECKING_FINISH = "auth_checking_finish",
  AUTH_START_LOGIN = "auth_start_login",
  AUTH_LOGIN = "auth_login",
  AUTH_LOGIN_ERROR = "auth_login_error",
  AUTH_START_REGISTER = "auth_start_register",
  AUTH_START_TOKEN_RENEW = "auth_start_token_renew",
  AUTH_LOGOUT = "auth_logout",

  //Users
  NEW_USER = "user_new",
  GET_USERS = "users_loaded",
  DELETE_USER = "user_delete",
  UPDATE_USER = "update_user",

  //UI
  OPEN_SIDEBAR = "ui_open_sidebar",
  CLOSE_SIDEBAR = "ui_close_sidebar",
}
