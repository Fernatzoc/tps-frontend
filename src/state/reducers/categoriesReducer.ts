import { Category } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../actions/category";

interface CategoriesState {
  categories: Category[];
}

const initialState: CategoriesState = {
  categories: [],
};

export const categoriesReducer = (
  state: CategoriesState = initialState,
  action: Action
): CategoriesState => {
  switch (action.type) {
    case ActionType.NEW_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    case ActionType.UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.id ? { ...action.payload } : category
        ),
      };

    case ActionType.DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.payload.id
        ),
      };

    case ActionType.GET_ALL_CATEGORIES:
      return { ...state, categories: [...action.payload] };

    default:
      return state;
  }
};
