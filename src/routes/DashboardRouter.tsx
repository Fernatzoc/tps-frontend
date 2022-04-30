import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import {
  Dashboard,
  CategoriesPage,
  CategoryCreate,
  CategoryUpdate,
  ProvidersPage,
  ProviderCreate,
  UsersCreate,
  UsersPage,
  UserUpdate,
  ProductsPage,
  ProductCreate,
  ProductUpdate,
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
            element={<ProductUpdate />}
          />

          <Route path="categorias" element={<CategoriesPage />} />
          <Route path="categorias/nuevo" element={<CategoryCreate />} />
          <Route
            path="categorias/actualizar/:id"
            element={<CategoryUpdate />}
          />

          <Route path="productos" element={<ProductsPage />} />
          <Route path="productos/nuevo" element={<ProductCreate />} />
          <Route path="productos/actualizar/:id" element={<ProductUpdate />} />

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
