import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { Dashboard, UsersCreate, UsersPage, UserUpdate } from "../pages";
import { RootState } from "../state";

export const DashboardRouter = () => {
  const { role } = useSelector((state: RootState) => state.auth);

  return (
    <Routes>
      {role === "Administrador" ? (
        <Route>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/new" element={<UsersCreate />} />
          <Route path="users/update/:id" element={<UserUpdate />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      ) : (
        <Route element={<Layout />}>
          <Route index element={<h2>Visualizador</h2>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      )}
    </Routes>
  );
};
