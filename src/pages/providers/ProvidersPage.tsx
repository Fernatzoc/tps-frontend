import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomTable, Layout, MainAll } from "../../components";
import { RootState } from "../../state";
import {
  deleteProvider,
  getAllProviders,
} from "../../state/action-creators/providers";

export const ProvidersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProviders());
  }, [dispatch]);

  const { providers } = useSelector((state: RootState) => state.providers);

  return (
    <Layout title="Proveedores">
      <MainAll
        titlePage="Proveedores"
        link="/proveedores/nuevo"
        titleButton="Agregar Proveedor"
      >
        <CustomTable
          data={providers}
          titles={["nombre", "direccion", "telefono", "correo"]}
          deleteItem={deleteProvider}
        />
      </MainAll>
    </Layout>
  );
};
