import { FC } from "react";
import { MenuItem, TextField } from "@mui/material";
import { MyTextInput } from "./MyTextInput";
import { FormikErrors, FormikTouched } from "formik";

interface values {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface Props {
  values: values;
  errors: FormikErrors<values>;
  touched: FormikTouched<values>;
  handleChange: any;
  handleBlur: any;
}

export const UsersForm: FC<Props> = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <>
      <MyTextInput
        label="Nombre"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
        touched={touched.name}
      />

      <MyTextInput
        label="Correo"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
      />

      <TextField
        margin="normal"
        select
        fullWidth
        label="Rol"
        name="role"
        value={values.role}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={errors.role && touched.role && errors.role}
      >
        <MenuItem value="Administrador">Administrador</MenuItem>
        <MenuItem value="Visualizador">Visualizador</MenuItem>
      </TextField>

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
        helperText={errors.password && touched.password && errors.password}
      />
    </>
  );
};
