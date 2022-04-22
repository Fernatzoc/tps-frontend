import { TextField } from "@mui/material";

interface Props {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: any;
  onBlur: any;
  touched: any;
  error: any;
  [x: string]: any;
}

export const MyTextInput = (props: Props) => {
  const { label, name, type, value, onChange, onBlur, touched, error } = props;

  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        helperText={error && touched && error}
      />
    </>
  );
};
