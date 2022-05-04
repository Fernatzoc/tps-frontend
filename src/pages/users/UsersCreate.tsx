import {
  Box,
  Button,
  Card,
  Container,
  DialogActions,
  Stack,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { Layout, UsersForm } from "../../components";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { startNewUser } from "../../state/action-creators/auth";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { Link, useNavigate } from "react-router-dom";

interface values {
  name: string;
  email: string;
  password: string;
  role: string;
}

export const UsersCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: values) => {
    dispatch(
      startNewUser(values.name, values.email, values.role, values.password)
    );
    navigate("/usuarios");
  };

  return (
    <Layout title="Usuarios">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Card style={{ padding: "35px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4" gutterBottom>
              Nuevo Usuario
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/usuarios"
              startIcon={<ArrowBackOutlinedIcon />}
            >
              Regresar
            </Button>
          </Stack>

          <Formik
            initialValues={
              {
                name: "",
                email: "",
                password: "",
                role: "",
              } as values
            }
            onSubmit={onSubmit}
            validationSchema={Yup.object({
              name: Yup.string().required("Requerido"),
              email: Yup.string()
                .email("Debe ser válido el correo electrónico")
                .required("Requerido"),
              password: Yup.string().required("Requerido"),
              role: Yup.string().required("Requerido"),
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
                      <UsersForm
                        errors={errors}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        values={values}
                        touched={touched}
                      />

                      <DialogActions>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Agregar Usuario
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
