import { Dispatch } from "redux";
import { Transaction } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../actions/transaction";
import { fetchWithoutToken } from "../../helpers";
import toast from "react-hot-toast";

export const getAllTransactions = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken("transactions", "", "GET");
      const transactions: Transaction[] = response.data.transactions;

      dispatch({
        type: ActionType.GET_ALL_TRANSACTIONS,
        payload: transactions,
      });
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
      }
      console.log(error);
    }
  };
};

export const newTransaction = (
  id_producto: string,
  movimiento: string,
  fecha: string,
  cantidad: string,
  costo_unitario: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken(
        "transaction",
        {
          id_producto,
          movimiento,
          fecha,
          cantidad,
          costo_unitario,
        },
        "POST"
      );

      const transaction: Transaction = response.data.transaction;
      dispatch({
        type: ActionType.NEW_TRANSACTION,
        payload: transaction,
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

export const updateTransaction = (
  id: string | undefined,
  id_producto: string,
  movimiento: string,
  fecha: string,
  cantidad: string,
  costo_unitario: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken(
        `transaction/${id}`,
        { id_producto, movimiento, fecha, cantidad, costo_unitario },
        "PUT"
      );

      const transaction: Transaction = response.data;
      dispatch({
        type: ActionType.UPDATE_TRANSACTION,
        payload: transaction,
      });

      toast.success("Transaccion actualizada correctamente");
    } catch (error: any) {
      if (error.response) {
        //console.log(error.response.data.message);
        toast.error("Error compruebe sus datos");
      }
      console.log(error);
    }
  };
};

export const deleteTransaction = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await fetchWithoutToken(
        `transaction/${id}`,
        "",
        "DELETE"
      );

      dispatch({
        type: ActionType.DELETE_TRANSACTION,
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
