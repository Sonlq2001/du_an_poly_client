import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';

import { GroupSelect } from './SelectElement.styles';

const SelectElement = ({ options, label, placeholder, ...props }) => {
  const [field] = useField(props);

  const handleChangeSelect = (value) => {
    const valueOption = {
      target: {
        name: field.name,
        value: value,
      },
    };
    field.onChange(valueOption);
  };

  return (
    <GroupSelect>
      {label && (
        <label htmlFor="" className="form-label">
          {label}
        </label>
      )}
      <Select
        options={options}
        placeholder={placeholder}
        className="form-select"
        {...props}
        {...field}
        onChange={handleChangeSelect}
      />
    </GroupSelect>
  );
};

export default SelectElement;
