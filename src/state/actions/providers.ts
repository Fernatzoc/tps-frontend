import { Proveedor } from "../../interfaces";
import { ActionType } from "../action-types";

interface newProvider {
  type: ActionType.NEW_PROVIDER;
  payload: Proveedor;
}

interface updateProvider {
  type: ActionType.UPDATE_PROVIDER;
  payload: Proveedor;
}

interface deleteProvider {
  type: ActionType.DELETE_PROVIDER;
  payload: { id: string };
}

interface getAllProviders {
  type: ActionType.GET_ALL_PROVIDERS;
  payload: Proveedor[];
}

export type Action =
  | newProvider
  | updateProvider
  | deleteProvider
  | getAllProviders;
