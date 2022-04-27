import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state";
import { deleteUser, getUsers } from "../../state/action-creators/auth";
import { CustomTable, Layout, MainAll } from "../../components";

export const UsersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { users } = useSelector((state: RootState) => state.auth);

  return (
    <Layout title="Usuarios">
      <MainAll
        titlePage="Usuarios"
        link="/usuarios/nuevo"
        titleButton="Agregar Usuario"
      >
        <CustomTable
          data={users}
          titles={["id", "name", "email", "role"]}
          deleteItem={deleteUser}
        />
      </MainAll>
    </Layout>
  );
};
