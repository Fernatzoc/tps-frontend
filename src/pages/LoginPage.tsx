import {
  Avatar,
  Box,
  Button,
  Container,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { Form, Formik, FormikHelpers } from "formik";
import { startLogin } from "../state/action-creators/auth";
import { useDispatch } from "react-redux";
import { Card } from "@mui/material";

interface values {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = (
    values: values,
    { setSubmitting }: FormikHelpers<values>
  ) => {
    setTimeout(() => {
      dispatch(startLogin(values.email, values.password));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Toaster />

      <Formik
        initialValues={
          {
            email: "correo1@correo.com",
            password: "123456789",
          } as values
        }
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Debe ser válido el correo electrónico")
            .required("Requerido"),
          password: Yup.string().required("Requerido"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            isSubmitting,
          } = props;

          return (
            <Container component="main" maxWidth="xs">
              <Card style={{marginTop: "75px", padding: "10px"}}>
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Iniciar Sesión
                  </Typography>
                  <Form>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Correo"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.email && touched.email && errors.email}
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Contraseña"
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        errors.password && touched.password && errors.password
                      }
                    />
                    <DialogActions>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isSubmitting}
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Iniciar Sesión
                      </Button>
                    </DialogActions>
                  </Form>
                </Box>
              </Card>
            </Container>
          );
        }}
      </Formik>
    </>
  );
};
