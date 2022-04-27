import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { providersReducer } from "./providersReducer";
import { uiReducer } from "./uiReducer";

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  providers: providersReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
