import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormController from "./FormController";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function LoginForm() {
  let onSubmit = (values) => console.log("hello", values);

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required!")
      .email("Please enter valid Email"),
    password: Yup.string().required("Password is required!"),
  });

  return (
    <Container sx={{ mt: 7 }}>
      <Box
        sx={{
          width: "30%",
          margin: "auto",
          padding: 5,
          boxShadow: "0px 0px 15px 0px gray",
          borderRadius: 5,
        }}
      >
        <Typography variant="h5" sx={{ color: "gray" }}>
          Log In
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormController control="input" name="email" label="Email" />
                <FormController
                  control="input"
                  name="password"
                  label="Password"
                />
                <Box sx={{ textAlign: "center" }}>
                  <button className="btn-primary" type="submit">
                    Log In
                  </button>
                  <br />
                  <Link to="/register">Create New Account</Link>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
}

export default LoginForm;
