import {
  Box,
  Button,
  Container,
  DialogActions,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { Layout } from "../../components";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../state";
import { Transaction } from "../../interfaces";
import { updateTransaction } from "../../state/action-creators/transactions";
import { useEffect } from "react";
import { getAllProducts } from "../../state/action-creators/products";

interface values {
  id_producto: string;
  movimiento: string;
  fecha: string;
  cantidad: string;
  costo_unitario: string;
}

export const TransactionUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const { products } = useSelector((state: RootState) => state.products);

  const { id } = useParams();
  const { transactions } = useSelector((state: RootState) => state.transactios);
  const transaction = transactions.find(
    (transaction: Transaction) => transaction.id == id
  );

  const onSubmit = (values: values) => {
    dispatch(
      updateTransaction(
        id,
        values.id_producto,
        values.movimiento,
        values.fecha,
        values.cantidad,
        values.costo_unitario
      )
    );
    navigate("/transacciones");
  };

  return (
    <Layout title="Proveedores">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Editar Proveedor
        </Typography>
        <Formik
          initialValues={
            {
              id_producto: transaction?.id_producto,
              movimiento: transaction?.movimiento,
              fecha: transaction?.fecha,
              cantidad: transaction?.cantidad,
              costo_unitario: transaction?.costo_unitario,
            } as values
          }
          onSubmit={onSubmit}
          validationSchema={Yup.object({
            id_producto: Yup.string().required("Requerido"),
            movimiento: Yup.string().required("Requerido"),
            fecha: Yup.string().required("Requerido"),
            cantidad: Yup.string().required("Requerido"),
            costo_unitario: Yup.string().required("Requerido"),
          })}
        >
          {(props) => {
            const { values, touched, errors, handleChange, handleBlur } = props;

            return (
              <Container component="main" maxWidth="xs">
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Form noValidate>
                    <TextField
                      margin="normal"
                      select
                      fullWidth
                      label="Producto"
                      name="id_producto"
                      value={values.id_producto}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.id_producto &&
                        touched.id_producto &&
                        errors.id_producto
                      }
                    >
                      {products.map((product) => (
                        <MenuItem key={product.id} value={product.id}>
                          {product.nombre}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      margin="normal"
                      select
                      fullWidth
                      label="Movimiento"
                      name="movimiento"
                      value={values.movimiento}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.movimiento &&
                        touched.movimiento &&
                        errors.movimiento
                      }
                    >
                      <MenuItem value="entrada">Entrada</MenuItem>
                      <MenuItem value="salida">Salida</MenuItem>
                    </TextField>

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="fecha"
                      type="date"
                      value={values.fecha}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.fecha && touched.fecha && errors.fecha}
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Cantidad"
                      name="cantidad"
                      type="number"
                      value={values.cantidad}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.cantidad && touched.cantidad && errors.cantidad
                      }
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Costo Unitario"
                      name="costo_unitario"
                      type="number"
                      value={values.costo_unitario}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.costo_unitario &&
                        touched.costo_unitario &&
                        errors.costo_unitario
                      }
                    />

                    <DialogActions>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Actualizar Proveedor
                      </Button>
                    </DialogActions>
                  </Form>
                </Box>
              </Container>
            );
          }}
        </Formik>
      </Container>
    </Layout>
  );
};
