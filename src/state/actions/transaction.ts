import { Transaction } from "../../interfaces";
import { ActionType } from "../action-types";

interface newTransaction {
  type: ActionType.NEW_TRANSACTION;
  payload: Transaction;
}

interface updateTransaction {
  type: ActionType.UPDATE_TRANSACTION;
  payload: Transaction;
}

interface deleteTransaction {
  type: ActionType.DELETE_TRANSACTION;
  payload: { id: string };
}

interface getAllTransactions {
  type: ActionType.GET_ALL_TRANSACTIONS;
  payload: Transaction[];
}

export type Action =
  | newTransaction
  | updateTransaction
  | deleteTransaction
  | getAllTransactions;
