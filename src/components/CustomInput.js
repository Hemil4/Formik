import React from 'react';
import { useField, ErrorMessage } from 'formik';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-3">
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
      </label>
      <input
        className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} component="div" className="invalid-feedback" />
    </div>
  );
};

export default CustomInput;
