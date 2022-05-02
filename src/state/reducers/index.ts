import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { categoriesReducer } from "./categoriesReducer";
import { productsReducer } from "./productsReducer";
import { providersReducer } from "./providersReducer";
import { transactionsReducer } from "./transactionsReducer";
import { uiReducer } from "./uiReducer";

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  providers: providersReducer,
  categories: categoriesReducer,
  products: productsReducer,
  transactios: transactionsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
