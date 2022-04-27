import { Dispatch } from "redux";
import { Proveedor } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../actions/providers";
import { fetchWithoutToken } from "../../helpers";
import toast from "react-hot-toast";

export const getAllProviders = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken("providers", "", "GET");
      const providers: Proveedor[] = response.data.proveedores;

      dispatch({
        type: ActionType.GET_ALL_PROVIDERS,
        payload: providers,
      });
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
      }
      console.log(error);
    }
  };
};

export const newProvider = (
  nombre: string,
  telefono: string,
  direccion: string,
  correo: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken(
        "provider",
        {
          nombre,
          telefono,
          direccion,
          correo,
        },
        "POST"
      );

      const provider: Proveedor = response.data.proveedor;
      dispatch({
        type: ActionType.NEW_PROVIDER,
        payload: provider,
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

export const updateProvider = (
  id: string | undefined,
  nombre: string,
  telefono: string,
  direccion: string,
  correo: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken(
        `provider/${id}`,
        { nombre, telefono, direccion, correo },
        "PUT"
      );

      const provider: Proveedor = response.data;
      dispatch({
        type: ActionType.UPDATE_PROVIDER,
        payload: provider,
      });

      toast.success("Proveedor actualizado correctamente");
    } catch (error: any) {
      if (error.response) {
        //console.log(error.response.data.message);
        toast.error("Error compruebe sus datos");
      }
      console.log(error);
    }
  };
};

export const deleteProvider = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await fetchWithoutToken(`provider/${id}`, "", "DELETE");

      dispatch({
        type: ActionType.DELETE_PROVIDER,
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
