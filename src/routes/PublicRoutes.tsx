import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { RootState } from "../state";

interface Props {
  children: JSX.Element;
}

export const PublicRoutes = ({ children }: Props) => {
  const { id } = useSelector((state: RootState) => state.auth);

  return !!id ? <Navigate to="/" /> : children;
};
