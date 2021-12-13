import React from 'react';
import { useField, ErrorMessage } from 'formik';

import { WrapTextarea } from './TextareaElement.styles';

const TextareaElement = ({
  placeholder,
  label,
  labelBlock = false,
  ...props
}) => {
  const [field] = useField(props);
  return (
    <WrapTextarea labelBlock={labelBlock}>
      {label && (
        <label htmlFor="" className="label-form">
          {label}
        </label>
      )}
      <textarea
        id=""
        cols="30"
        rows="10"
        placeholder={placeholder}
        className="textarea-form"
        {...field}
        {...props}
      />
      <ErrorMessage component="div" name={field.name} className="error-msg" />
    </WrapTextarea>
  );
};

export default TextareaElement;
