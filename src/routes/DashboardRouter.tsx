import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  CategoriesPage,
  CategoryCreate,
  CategoryUpdate,
  ProvidersPage,
  ProviderCreate,
  ProviderUpdate,
  UsersPage,
  UsersCreate,
  UserUpdate,
  ProductsPage,
  SingleProductPage,
  ProductCreate,
  ProductUpdate,
  TransactionsPage,
  TransactionCreate,
  TransactionUpdate,
  ReportsPage,
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
          <Route path="categorias" element={<CategoriesPage />} />
          <Route path="categorias/nuevo" element={<CategoryCreate />} />
          <Route
            path="categorias/actualizar/:id"
            element={<CategoryUpdate />}
          />
          <Route path="productos" element={<ProductsPage />} />
          <Route path="productos/:id" element={<SingleProductPage />} />
          <Route path="productos/nuevo" element={<ProductCreate />} />
          <Route path="productos/actualizar/:id" element={<ProductUpdate />} />
          <Route path="transacciones" element={<TransactionsPage />} />
          <Route path="transacciones/nuevo" element={<TransactionCreate />} />
          <Route
            path="transacciones/actualizar/:id"
            element={<TransactionUpdate />}
          />

          <Route path="reportes" element={<ReportsPage />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      ) : (
        <Route>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="reportes" element={<ReportsPage />} />
        </Route>
      )}
    </Routes>
  );
};
