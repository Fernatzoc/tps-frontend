import { Product } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../actions/product";

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

export const productsReducer = (
  state: ProductsState = initialState,
  action: Action
): ProductsState => {
  switch (action.type) {
    case ActionType.NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case ActionType.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((category) =>
          category.id === action.payload.id ? { ...action.payload } : category
        ),
      };

    case ActionType.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case ActionType.GET_ALL_PRODUCTS:
      return { ...state, products: [...action.payload] };

    default:
      return state;
  }
};
