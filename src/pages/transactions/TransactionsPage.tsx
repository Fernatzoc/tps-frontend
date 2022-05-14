import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state";
import { CustomTable, Layout, MainAll } from "../../components";
import {
  deleteTransaction,
  getAllTransactions,
} from "../../state/action-creators/transactions";

export const TransactionsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const { transactions } = useSelector((state: RootState) => state.transactios);

  return (
    <Layout title="Transacciones">
      <MainAll
        titlePage="Transacciones"
        link="/transacciones/nuevo"
        titleButton="Nueva Transaccion"
      >
        <CustomTable
          data={transactions}
          titles={["fecha", "movimiento", "cantidad", "costo_unitario", "total"]}
          deleteItem={deleteTransaction}
        />
      </MainAll>
    </Layout>
  );
};
