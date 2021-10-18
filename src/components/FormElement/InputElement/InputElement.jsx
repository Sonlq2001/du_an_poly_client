import React from 'react';
import { useField } from 'formik';

import { GroupForm } from './InputElement.styles';

const InputElement = ({ label, type = 'text', placeholder, ...props }) => {
  const [field] = useField(props);
  return (
    <GroupForm>
      {label && (
        <label htmlFor="" className="form-label">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="form-input"
        {...field}
        disabled={
          props.name === 'subject_id' &&
          props.name === 'teacher_id' &&
          props.name === 'semester_id'
            ? true
            : false
        }
      />
    </GroupForm>
  );
};

export default InputElement;
