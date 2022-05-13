import {
  Box,
  Button,
  Card,
  Container,
  DialogActions,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Form, Formik } from "formik";
import { Layout } from "../../components";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../state";
import { Product } from "../../interfaces";
import { updateProduct } from "../../state/action-creators/products";
import { useEffect } from "react";
import { getAllCategories } from "../../state/action-creators/categories";
import { getAllProviders } from "../../state/action-creators/providers";

interface values {
  nombre: string;
  stock: string;
  id_categoria: string;
  id_proveedor: string;
}

export const ProductUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProviders());
  }, [dispatch]);
  const { categories } = useSelector((state: RootState) => state.categories);
  const { providers } = useSelector((state: RootState) => state.providers);

  const { id } = useParams();
  const { products } = useSelector((state: RootState) => state.products);
  const product = products.find((product: Product) => product.id == id);

  const onSubmit = (values: values) => {
    dispatch(
      updateProduct(
        id,
        values.nombre,
        values.stock,
        values.id_categoria,
        values.id_proveedor
      )
    );
    navigate("/productos");
  };

  return (
    <Layout title="productos">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Card style={{ padding: "35px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4" gutterBottom>
              Actualizar Producto
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/productos"
              startIcon={<ArrowBackOutlinedIcon />}
            >
              Regresar
            </Button>
          </Stack>

          <Formik
             initialValues={
              {
              nombre: product?.nombre,
              stock: product?.stock,
              id_categoria: product?.id_categoria,
              id_proveedor: product?.id_proveedor,
            } as unknown as values
            }
            onSubmit={onSubmit}
            validationSchema={Yup.object({
              nombre: Yup.string().required("Requerido"),
              stock: Yup.string().required("Requerido"),
              id_categoria: Yup.string().required("Requerido"),
              id_proveedor: Yup.string().required("Requerido"),
            })}
          >
            {(props) => {
              const { values, touched, errors, handleChange, handleBlur } =
                props;

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
                        required
                        fullWidth
                        label="Nombre"
                        name="nombre"
                        type="text"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.nombre && touched.nombre && errors.nombre
                        }
                      />

                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Stock"
                        name="stock"
                        type="number"
                        value={values.stock}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.stock && touched.stock && errors.stock
                        }
                      />

                      <TextField
                        margin="normal"
                        select
                        fullWidth
                        label="Categoria"
                        name="id_categoria"
                        value={values.id_categoria}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.id_categoria &&
                          touched.id_categoria &&
                          errors.id_categoria
                        }
                      >
                        {categories.map((category) => (
                          <MenuItem key={category.id} value={category.id}>
                            {category.nombre}
                          </MenuItem>
                        ))}
                      </TextField>

                      <TextField
                        margin="normal"
                        select
                        fullWidth
                        label="Proveedor"
                        name="id_proveedor"
                        value={values.id_proveedor}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.id_proveedor &&
                          touched.id_proveedor &&
                          errors.id_proveedor
                        }
                      >
                        {providers.map((provider) => (
                          <MenuItem key={provider.id} value={provider.id}>
                            {provider.nombre}
                          </MenuItem>
                        ))}
                      </TextField>

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
        </Card>
      </Container>
    </Layout>
  );
};
