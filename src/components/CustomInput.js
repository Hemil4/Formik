import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const CustomInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

  return (
    <div className="form-group">
            <label htmlFor={props.name}>{props.text}</label>
            <Field type={props.type} name={props.name} />
            <ErrorMessage name={props.name} component="div" className="error-message" />
          </div>
  );
};

export default CustomInput;
