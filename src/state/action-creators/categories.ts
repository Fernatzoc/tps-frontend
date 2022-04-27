import { Dispatch } from "redux";
import { Category } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../actions/category";
import { fetchWithoutToken } from "../../helpers";
import toast from "react-hot-toast";

export const getAllCategories = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken("categories", "", "GET");
      const categories: Category[] = response.data.categories;

      dispatch({
        type: ActionType.GET_ALL_CATEGORIES,
        payload: categories,
      });
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
      }
      console.log(error);
    }
  };
};

export const newCategory = (nombre: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken(
        "category",
        {
          nombre,
        },
        "POST"
      );

      const category: Category = response.data.category;
      dispatch({
        type: ActionType.NEW_CATEGORY,
        payload: category,
      });

      toast.success(response.data.message);
    } catch (error: any) {
      if (error.response) {
        //toast.error(error.response.data.message);
        toast.error("Error comprueb sus datos");
      }
      console.log(error);
    }
  };
};

export const updateCategory = (id: string | undefined, nombre: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken(
        `category/${id}`,
        { nombre },
        "PUT"
      );

      const category: Category = response.data;
      dispatch({
        type: ActionType.UPDATE_CATEGORY,
        payload: category,
      });

      toast.success("Categoria actualizada correctamente");
    } catch (error: any) {
      if (error.response) {
        //console.log(error.response.data.message);
        toast.error("Error compruebe sus datos");
      }
      console.log(error);
    }
  };
};

export const deleteCategory = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await fetchWithoutToken(`category/${id}`, "", "DELETE");

      dispatch({
        type: ActionType.DELETE_CATEGORY,
        payload: {
          id,
        },
      });

      toast.success(response.data.message);
    } catch (error: any) {
      if (error.response) {
        toast.error("Error");
        console.log(error.response.data);
      }
      console.log(error);
    }
  };
};
