import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomInput from './CustomInput';
import '../App.css'; // Import the CSS file

const ExampleForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    agreeToTerms: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    gender: Yup.string().required('Please select a gender'),
    agreeToTerms: Yup.boolean().oneOf([true], 'Please agree to the terms and conditions').required('Please agree to the terms and conditions'),
  });

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic
    console.log(values);

    // Display a success message
    alert('Form successfully submitted!');

    // Reset the form after submission
    resetForm();
  };


  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Form using formik validator</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

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
            <ErrorMessage name="gender" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>
              <Field type="checkbox" name="agreeToTerms" />
              Agree to Terms and Conditions
            </label>
            <ErrorMessage name="agreeToTerms" component="div" className="error-message" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ExampleForm;
