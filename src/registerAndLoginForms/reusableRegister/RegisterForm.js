import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormController from "./FormController";
import { Box, Container, Typography } from "@mui/material";
function RegisterForm() {
  let onSubmit = (values) => console.log("hello", values);

  const initialValues = {
    name: "",
    email: "",
    gender: "",
    password: "",
    passwordConfirmation: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("name is required!"),
    email: Yup.string()
      .required("Email is required!")
      .email("Please enter valid Email"),
    gender: Yup.string().required("gender is required!"),
    password: Yup.string().required("Password is required!"),
    passwordConfirmation: Yup.string()
      .min(6)
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      })
      .required("Confirm Password Required"),
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
        <Typography sx={{textAlign:'center'}}>Register</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormController control="input" name="name" label="Name" />
                <FormController control="input" name="email" label="Email" />
                <FormController
                  control="input"
                  name="password"
                  label="Password"
                />
                <FormController
                  control="input"
                  name="passwordConfirmation"
                  label="Confirm password"
                />

                <button type="submit">submit</button>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
}

export default RegisterForm;
