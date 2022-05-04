import {
  Box,
  Button,
  Card,
  Container,
  DialogActions,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Form, Formik } from "formik";
import { Layout } from "../../components";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { newProvider } from "../../state/action-creators/providers";
import { Link, useNavigate } from "react-router-dom";

interface values {
  nombre: string;
  direccion: string;
  correo: string;
  telefono: string;
}

export const ProviderCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: values) => {
    dispatch(
      newProvider(
        values.nombre,
        values.telefono,
        values.direccion,
        values.correo
      )
    );
    navigate("/proveedores");
  };

  return (
    <Layout title="Proveedores">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Card style={{ padding: "35px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4" gutterBottom>
              Nuevo Proveedor
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/proveedores"
              startIcon={<ArrowBackOutlinedIcon />}
            >
              Regresar
            </Button>
          </Stack>

          <Formik
            initialValues={
              {
                nombre: "",
                telefono: "",
                direccion: "",
                correo: "",
              } as values
            }
            onSubmit={onSubmit}
            validationSchema={Yup.object({
              nombre: Yup.string().required("Requerido"),
              correo: Yup.string()
                .email("Debe ser válido el correo electrónico")
                .required("Requerido"),
              telefono: Yup.string().required("Requerido"),
              direccion: Yup.string().required("Requerido"),
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
                        label="Telefono"
                        name="telefono"
                        type="tel"
                        value={values.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.telefono && touched.telefono && errors.telefono
                        }
                      />

                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Direccion"
                        name="direccion"
                        type="text"
                        value={values.direccion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.direccion &&
                          touched.direccion &&
                          errors.direccion
                        }
                      />

                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Correo"
                        name="correo"
                        type="text"
                        value={values.correo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.correo && touched.correo && errors.correo
                        }
                      />

                      <DialogActions>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Agregar Proveedor
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
