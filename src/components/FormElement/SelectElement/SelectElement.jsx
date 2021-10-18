import React from 'react';
import Select from 'react-select';
import { useField, useFormikContext } from 'formik';

import { GroupSelect } from './SelectElement.styles';

const SelectElement = ({ options, label, placeholder, ...props }) => {
  const { setFieldValue, values } = useFormikContext();
  const [field] = useField(props);
  const handleChangeSelect = (value) => {
    if (Array.isArray(value)) {
      const valueOption = {
        target: {
          name: field.name,
          value: value,
        },
      };
      field.onChange(valueOption);
      const groupStudent =
        valueOption.target.value &&
        valueOption.target.value.map((item) => {
          return item.value;
        });
      setFieldValue(valueOption.target.name, groupStudent);
    }
    const valueOption = {
      target: {
        name: field.name,
        value: value.value,
      },
    };
    field.onChange(valueOption);
    setFieldValue(valueOption.target.name, valueOption.target.value);
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
