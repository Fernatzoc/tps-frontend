import {
  Box,
  Button,
  Container,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { Layout } from "../../components";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../state";
import { Category } from "../../interfaces";
import { updateCategory } from "../../state/action-creators/categories";

interface values {
  nombre: string;
}

export const CategoryUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { categories } = useSelector((state: RootState) => state.categories);
  const category = categories.find((category: Category) => category.id == id);

  const onSubmit = (values: values) => {
    dispatch(updateCategory(id, values.nombre));
    navigate("/categorias");
  };

  return (
    <Layout title="Categorias">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Editar Categoria
        </Typography>
        <Formik
          initialValues={
            {
              nombre: category?.nombre,
            } as values
          }
          onSubmit={onSubmit}
          validationSchema={Yup.object({
            nombre: Yup.string().required("Requerido"),
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

                    <DialogActions>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Actualizar Categoria
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
