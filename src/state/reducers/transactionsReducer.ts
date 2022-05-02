import { Transaction } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../actions/transaction";

interface TransactionsState {
  transactions: Transaction[];
}

const initialState: TransactionsState = {
  transactions: [],
};

export const transactionsReducer = (
  state: TransactionsState = initialState,
  action: Action
): TransactionsState => {
  switch (action.type) {
    case ActionType.NEW_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case ActionType.UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map((provider) =>
          provider.id === action.payload.id ? { ...action.payload } : provider
        ),
      };

    case ActionType.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (provider) => provider.id !== action.payload.id
        ),
      };

    case ActionType.GET_ALL_TRANSACTIONS:
      return { ...state, transactions: [...action.payload] };

    default:
      return state;
  }
};
