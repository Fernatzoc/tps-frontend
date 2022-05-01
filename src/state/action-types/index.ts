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

  //Providers
  NEW_PROVIDER = "new_provider",
  GET_ALL_PROVIDERS = "providers_loaded",
  DELETE_PROVIDER = "providers_delete",
  UPDATE_PROVIDER = "provider_update",

  //Providers
  NEW_CATEGORY = "new_category",
  GET_ALL_CATEGORIES = "categories_loaded",
  DELETE_CATEGORY = "category_delete",
  UPDATE_CATEGORY = "category_update",

  //Products
  NEW_PRODUCT = "new_product",
  GET_ALL_PRODUCTS = "products_loaded",
  DELETE_PRODUCT = "product_delete",
  UPDATE_PRODUCT = "product_update",

  //UI
  OPEN_SIDEBAR = "ui_open_sidebar",
  CLOSE_SIDEBAR = "ui_close_sidebar",
}
