import { ErrorMessage, Field } from "formik";
import React from "react";
import TextField from "@mui/material/TextField";
function Input(props) {
  let { name, label } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        // console.log(field);
        // console.log(form.errors);
        return (
          <div>
            <TextField
            sx={{m:1,width:'100%'}}
              error={!!form.errors[name]}
              id="filled-error-helper-text"
              label={label}
              helperText={form.errors[name]}
              variant="standard"
              {...field}
            />
            {/* <label htmlFor={name}>{label}</label>
            <input name={name} {...field} />
            <ErrorMessage name={name} /> */}
          </div>
        );
      }}
    </Field>
  );
}

export default Input;
