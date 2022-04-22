import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../state";

interface Props {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props) => {
  const { id } = useSelector((state: RootState) => state.auth);
  return !!id ? children : <Navigate to="/login" />;
};
