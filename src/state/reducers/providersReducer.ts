import { Proveedor } from "../../interfaces";
import { ActionType } from "../action-types";
import { Action } from "../actions/providers";

interface ProviderState {
  providers: Proveedor[];
}

const initialState: ProviderState = {
  providers: [],
};

export const providersReducer = (
  state: ProviderState = initialState,
  action: Action
): ProviderState => {
  switch (action.type) {
    case ActionType.NEW_PROVIDER:
      return {
        ...state,
        providers: [...state.providers, action.payload],
      };

    case ActionType.UPDATE_PROVIDER:
      return {
        ...state,
        providers: state.providers.map((provider) =>
          provider.id === action.payload.id ? { ...action.payload } : provider
        ),
      };

    case ActionType.DELETE_PROVIDER:
      return {
        ...state,
        providers: state.providers.filter(
          (provider) => provider.id !== action.payload.id
        ),
      };

    case ActionType.GET_ALL_PROVIDERS:
      return { ...state, providers: [...action.payload] };

    default:
      return state;
  }
};
