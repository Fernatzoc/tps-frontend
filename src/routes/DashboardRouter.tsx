import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import {
  Dashboard,
  ProviderCreate,
  ProvidersPage,
  ProviderUpdate,
  UsersCreate,
  UsersPage,
  UserUpdate,
} from "../pages";
import { RootState } from "../state";

export const DashboardRouter = () => {
  const { role } = useSelector((state: RootState) => state.auth);

  return (
    <Routes>
      {role === "Administrador" ? (
        <Route>
          <Route index element={<Dashboard />} />

          <Route path="usuarios" element={<UsersPage />} />
          <Route path="usuarios/nuevo" element={<UsersCreate />} />
          <Route path="usuarios/actualizar/:id" element={<UserUpdate />} />

          <Route path="proveedores" element={<ProvidersPage />} />
          <Route path="proveedores/nuevo" element={<ProviderCreate />} />
          <Route
            path="proveedores/actualizar/:id"
            element={<ProviderUpdate />}
          />

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
