import React from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import FormController from "../registerAndLoginForms/reusableRegister/FormController";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {  updateUser } from "../redux/auth/authActions";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { toast } from "react-toastify";

function Profile() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let onSubmit = (values) => {dispatch(updateUser(values))
    toast.success("Updated Succssesfully"); };

  const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/jpg"];
  const initialValues = user;

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required!"),
    email: Yup.string()
      .required("Email is required!")
      .email("Please enter valid Email"),

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
          Profile
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, setFieldValue, values }) => {
            return (
              <Form>
                <Box sx={{ textAlign: "center" }}>
                  <Avatar
                    alt="Cindy Baker"
                    sx={{ width: "100px", height: "100px", margin: "auto" }}
                    src={
                      values?.img
                        ? URL.createObjectURL(values?.img)
                        : "/static/images/avatar/3.jpg"
                    }
                  />

                  <label htmlFor="contained-button-file">
                    <Input
                      sx={{ display: "none" }}
                      // accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      name="img"
                      onChange={(e) => setFieldValue("img", e.target.files[0])}
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </Box>
                <div className="erorr">{errors.img}</div>
                <FormController control="input" name="name" label="Name" />
                <FormController control="input" name="email" label="Email" />

                <Box sx={{ textAlign: "center" }}>
                  <button className="btn-primary" type="submit">
                    save
                  </button>
                  <br />
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
}

export default Profile;
