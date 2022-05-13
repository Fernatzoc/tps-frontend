import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/auth";
import { User, Users } from "../../interfaces";
import { fetchWithoutToken, fetchWithToken } from "../../helpers";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";

export const startLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    console.log(email, password);

    try {
      const response: AxiosResponse<Users> = await fetchWithoutToken(
        "auth/login",
        { email, password },
        "POST"
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());

      dispatch({
        type: ActionType.AUTH_LOGIN,
        payload: {
          id: response.data.user.id,
          name: response.data.user.id,
          role: response.data.user.role,
        },
      });
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.error);
      }
      console.log(error);
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<Action>) => {
    localStorage.clear();
    dispatch({
      type: ActionType.AUTH_LOGOUT
    })
  };
};

export const startNewUser = (
  name: string,
  email: string,
  role: string,
  password: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    console.log(name, email, role, password);

    try {
      const response: any = await fetchWithoutToken(
        "auth/register",
        { name, email, role, password },
        "POST"
      );

      const user: User = response.data.user;
      dispatch({
        type: ActionType.NEW_USER,
        payload: user,
      });

      toast.success("Usuario creado correctamente");
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };
};

export const startChecking = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithToken("auth/refresh", "", "POST");

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("token-init-date", new Date().getTime().toString());

      dispatch({
        type: ActionType.AUTH_LOGIN,
        payload: {
          id: response.data.id,
          name: response.data.name,
          role: response.data.role,
        },
      });
    } catch (error: any) {
      dispatch({ type: ActionType.AUTH_CHECKING_FINISH });
      if (error.response) {
        console.log(error.response.data);
      }
      console.log(error);
    }
  };
};

export const getUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response: any = await fetchWithoutToken("auth/users", "", "GET");
      const users: User[] = response.data.users;
      dispatch({
        type: ActionType.GET_USERS,
        payload: users,
      });
    } catch (error: any) {
      dispatch({ type: ActionType.AUTH_CHECKING_FINISH });
      if (error.response) {
        console.log(error.response.data);
      }
      console.log(error);
    }
  };
};

export const deleteUser = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await fetchWithoutToken(`auth/user/${id}`, "", "DELETE");

      dispatch({
        type: ActionType.DELETE_USER,
        payload: {
          id,
        },
      });

      toast.success("Usuario eliminado correctamente");
      console.log(response);
    } catch (error: any) {
      dispatch({ type: ActionType.AUTH_CHECKING_FINISH });
      if (error.response) {
        toast.error("Error");
        console.log(error.response.data);
      }
      console.log(error);
    }
  };
};

export const updateUser = (
  id: string | undefined,
  name: string,
  email: string,
  role: string,
  password?: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    console.log(name, email, role, password);

    try {
      const response: any = await fetchWithoutToken(
        `auth/user/${id}`,
        { name, email, role, password },
        "PUT"
      );

      const user: User = response.data;
      dispatch({
        type: ActionType.UPDATE_USER,
        payload: user,
      });

      toast.success("Usuario actualizado correctamente");
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };
};

export const startLogout = () => {
  return (dispatch: Dispatch<Action>) => {
    localStorage.clear();
    dispatch({ type: ActionType.AUTH_LOGOUT });
  };
};
