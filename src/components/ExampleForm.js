import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput";
import "../App.css";

const ExampleForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    agreeToTerms: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().min(2, "Must be at least 2 characters").required("Required"),
    lastName: Yup.string().min(2, "Must be at least 2 characters").required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    gender: Yup.string().required("Please select a gender"),
    agreeToTerms: Yup.boolean()
      .oneOf([true], "Please agree to the terms and conditions")
      .required("Please agree to the terms and conditions"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);

    alert("Form successfully submitted!");

    resetForm();
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Form using formik validator
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <CustomInput name="firstName" text="First Name" type="text" />
          <CustomInput name="lastName" text="Last Name" type="text" />
          <CustomInput name="email" text="Email" type="email" />

          <div className="form-group">
            <label>Gender</label>
            <div>
              <label>
                <Field type="radio" name="gender" value="male" required />
                Male
              </label>
              <label className="ml-3">
                <Field type="radio" name="gender" value="female" required />
                Female
              </label>
            </div>
            <ErrorMessage
              name="gender"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label>
              <Field type="checkbox" name="agreeToTerms" />
              Agree to Terms and Conditions
            </label>
            <ErrorMessage
              name="agreeToTerms"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ExampleForm;
