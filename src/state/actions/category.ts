import { Category } from "../../interfaces";
import { ActionType } from "../action-types";

interface newCategory {
  type: ActionType.NEW_CATEGORY;
  payload: Category;
}

interface updateCategory {
  type: ActionType.UPDATE_CATEGORY;
  payload: Category;
}

interface deleteCategory {
  type: ActionType.DELETE_CATEGORY;
  payload: { id: string };
}

interface getAllCategories {
  type: ActionType.GET_ALL_CATEGORIES;
  payload: Category[];
}

export type Action =
  | newCategory
  | updateCategory
  | deleteCategory
  | getAllCategories;
