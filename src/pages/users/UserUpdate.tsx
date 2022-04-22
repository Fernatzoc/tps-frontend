import {
  Box,
  Button,
  Container,
  DialogActions,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { Layout, UsersForm } from "../../components";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../state/action-creators/auth";

import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../state";
import { User } from "../../interfaces";

interface values {
  name: string;
  email: string;
  password: string;
  role: string;
}

export const UserUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { users } = useSelector((state: RootState) => state.auth);
  const user = users.find((user: User) => user.id == id);

  const onSubmit = (values: values) => {
    dispatch(
      updateUser(id, values.name, values.email, values.role, values.password)
    );
    navigate("/users");
  };

  return (
    <Layout title="Usuarios">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Editar Usuario
        </Typography>
        <Formik
          initialValues={
            {
              name: user?.name,
              email: user?.email,
              password: "",
              role: user?.role,
            } as values
          }
          onSubmit={onSubmit}
          validationSchema={Yup.object({
            name: Yup.string().required("Requerido"),
            email: Yup.string()
              .email("Debe ser válido el correo electrónico")
              .required("Requerido"),
            role: Yup.string().required("Requerido"),
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
                        Actualizar Usuario
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
