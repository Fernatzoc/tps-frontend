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
import {
  newProvider,
  getAllProviders,
} from "../../state/action-creators/providers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAllCategories } from "../../state/action-creators/categories";
import { RootState } from "../../state";

interface values {
  nombre: string;
  precio: string;
  stock: string;
  categoria: string;
  proveedor: string;
}

export const ProductCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProviders());
  }, [dispatch]);
  const { categories } = useSelector((state: RootState) => state.categories);
  const { providers } = useSelector((state: RootState) => state.providers);

  console.log(categories);

  const onSubmit = (values: values) => {
    // dispatch(
    //   newProvider(
    //     values.nombre,
    //     values.telefono,
    //     values.stock,
    //     // values.correo
    //   )
    // );
    console.log(values);
    navigate("/productos");
  };

  return (
    <Layout title="Producootos">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Nuevo Producto
        </Typography>
        <Formik
          initialValues={
            {
              nombre: "",
              precio: "",
              stock: "",
              categoria: "",
              proveedor: "",
            } as values
          }
          onSubmit={onSubmit}
          validationSchema={Yup.object({
            nombre: Yup.string().required("Requerido"),
            precio: Yup.string().required("Requerido"),
            stock: Yup.string().required("Requerido"),
            categoria: Yup.string().required("Requerido"),
            proveedor: Yup.string().required("Requerido"),
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
                      label="Precio"
                      name="precio"
                      type="number"
                      value={values.precio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.precio && touched.precio && errors.precio
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
                      helperText={errors.stock && touched.stock && errors.stock}
                    />

                    <TextField
                      margin="normal"
                      select
                      fullWidth
                      label="Categoria"
                      name="categoria"
                      value={values.categoria}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.categoria &&
                        touched.categoria &&
                        errors.categoria
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
                      name="proveedor"
                      value={values.proveedor}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.proveedor &&
                        touched.proveedor &&
                        errors.proveedor
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
                        Agregar Producto
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
