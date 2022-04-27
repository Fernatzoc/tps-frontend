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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newCategory } from "../../state/action-creators/categories";

interface values {
  nombre: string;
}

export const CategoryCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: values) => {
    dispatch(newCategory(values.nombre));
    navigate("/categorias");
  };

  return (
    <Layout title="Categorias">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Nueva Categoria
        </Typography>
        <Formik
          initialValues={
            {
              nombre: "",
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
                        Agregar Categoria
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
