import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { categoriesReducer } from "./categoriesReducer";
import { providersReducer } from "./providersReducer";
import { uiReducer } from "./uiReducer";

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  providers: providersReducer,
  categories: categoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
