import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormController from "../registerAndLoginForms/reusableRegister/FormController";
import { Box, Container, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetCard } from "../redux/card/cardActions";

function SubmitOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let onSubmit = (values) => {
    dispatch(resetCard(values));
    navigate("/products");
  };

  const initialValues = {
    email: "",
    adress: "",
    phone: "",
  };
  const phoneRegExp = /^01[0125][0-9]{8}$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required!")
      .email("Please enter valid Email"),
    adress: Yup.string().required("Adress is required!"),
    phone: Yup.string()
      .required("Phone is required!")
      .matches(phoneRegExp, "Phone number is not valid"),
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
                <FormController control="input" name="adress" label="Adress" />

                <FormController control="input" name="email" label="Email" />
                <FormController
                  control="input"
                  name="phone"
                  label="Phone Number"
                />

                <Box sx={{ textAlign: "center" }}>
                  <button className="btn-primary" type="submit">
                    Submit
                  </button>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
}

export default SubmitOrder;
