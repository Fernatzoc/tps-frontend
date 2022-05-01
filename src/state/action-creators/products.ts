import { Dispatch } from "redux";
import { Product } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../actions/product";
import { fetchWithoutToken } from "../../helpers";
import toast from "react-hot-toast";

export const getAllProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken("products", "", "GET");
      const products: Product[] = response.data.products;

      dispatch({
        type: ActionType.GET_ALL_PRODUCTS,
        payload: products,
      });
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
      }
      console.log(error);
    }
  };
};

export const newProduct = (
  nombre: string,
  stock: string,
  id_categoria: string,
  id_proveedor: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken(
        "product",
        {
          nombre,
          stock,
          id_categoria,
          id_proveedor,
        },
        "POST"
      );

      const product: Product = response.data.product;
      dispatch({
        type: ActionType.NEW_PRODUCT,
        payload: product,
      });

      toast.success(response.data.message);
      console.log(response.data.message);
    } catch (error: any) {
      if (error.response) {
        //toast.error(error.response.data.message);
        toast.error("Error comprueb sus datos");
      }
      console.log(error);
    }
  };
};

export const updateProduct = (
  id: string | undefined,
  nombre: string,
  stock: string,
  id_categoria: string,
  id_proveedor: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken(
        `product/${id}`,
        { nombre, stock, id_proveedor, id_categoria },
        "PUT"
      );

      const product: Product = response.data;
      dispatch({
        type: ActionType.UPDATE_PRODUCT,
        payload: product,
      });

      toast.success("Producto actualizado correctamente");
    } catch (error: any) {
      if (error.response) {
        //console.log(error.response.data.message);
        toast.error("Error compruebe sus datos");
      }
      console.log(error);
    }
  };
};

export const deleteProduct = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await fetchWithoutToken(`product/${id}`, "", "DELETE");

      dispatch({
        type: ActionType.DELETE_PRODUCT,
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
