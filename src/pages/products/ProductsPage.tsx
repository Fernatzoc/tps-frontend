import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomTable, Layout, MainAll } from "../../components";
import { RootState } from "../../state";
import {
  deleteProduct,
  getAllProducts,
} from "../../state/action-creators/products";

export const ProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const { products } = useSelector((state: RootState) => state.products);

  return (
    <Layout title="Productos">
      <MainAll
        titlePage="Productos"
        link="/productos/nuevo"
        titleButton="Agregar Producto"
      >
        {
          <CustomTable
            data={products}
            titles={["id", "nombre", "stock"]}
            deleteItem={deleteProduct}
          />
        }
      </MainAll>
    </Layout>
  );
};
