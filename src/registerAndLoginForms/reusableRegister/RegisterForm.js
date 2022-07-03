import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormController from "./FormController";
import { Box, Container, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/authActions";
import { toast } from "react-toastify";



function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  let onSubmit = (values) => {
    dispatch(registerUser(values));
    navigate("/products");
    toast.success("Registered Succssesfully");  };

  const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/jpg"];
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    img: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required!"),
    email: Yup.string()
      .required("Email is required!")
      .email("Please enter valid Email"),
    password: Yup.string().required("Password is required!"),
    passwordConfirmation: Yup.string()
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      })
      .required("Confirm Password Required"),
    img: Yup.mixed()
      .notRequired()
      .test(
        "FILE_FORMAT",
        "Uploaded file has unsupported format.",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
  });

  return (
    <Container sx={{ mt: 2 }}>
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
          Register
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, handleBlur, setFieldValue }) => {
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
                <TextField
                  sx={{ m: 1, width: "100%" }}
                  name="img"
                  id="filled-error-helper-text"
                  variant="standard"
                  type="file"
                  onBlur={handleBlur}
                  onChange={(e) => setFieldValue("img", e.target.files[0])}
                  error={!!errors.instructorImg}
                  helperText={errors.instructorImg}
                />
                <Box sx={{ textAlign: "center" }}>
                  <button className="btn-primary" type="submit">
                    Submit
                  </button>
                  <br />
                  <Link to="/login">Already have Account</Link>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
}

export default RegisterForm;
