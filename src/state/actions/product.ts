import { Product } from "../../interfaces";
import { ActionType } from "../action-types";

interface newProduct {
  type: ActionType.NEW_PRODUCT;
  payload: Product;
}

interface updateProduct {
  type: ActionType.UPDATE_PRODUCT;
  payload: Product;
}

interface deleteProduct {
  type: ActionType.DELETE_PRODUCT;
  payload: { id: string };
}

interface getAllProducts {
  type: ActionType.GET_ALL_PRODUCTS;
  payload: Product[];
}

export type Action =
  | newProduct
  | updateProduct
  | deleteProduct
  | getAllProducts;
