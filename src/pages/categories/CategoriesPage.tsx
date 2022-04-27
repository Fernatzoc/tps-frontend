import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomTable, Layout, MainAll } from "../../components";
import { RootState } from "../../state";
import {
  getAllCategories,
  deleteCategory,
} from "../../state/action-creators/categories";

export const CategoriesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  const { categories } = useSelector((state: RootState) => state.categories);
  return (
    <Layout title="Categorias">
      <MainAll
        titlePage="Categorias"
        link="/categorias/nuevo"
        titleButton="Agregar Categoria"
      >
        <CustomTable
          data={categories}
          titles={["id", "nombre"]}
          deleteItem={deleteCategory}
        />
      </MainAll>
    </Layout>
  );
};
