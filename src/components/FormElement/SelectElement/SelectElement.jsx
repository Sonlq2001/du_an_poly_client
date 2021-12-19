import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';

import { GroupSelect } from './SelectElement.styles';

const SelectElement = ({
  options,
  label,
  placeholder,
  setValueSelect,
  ...props
}) => {
  const [field] = useField(props);
  const valueSelected = options.find((option) => option.value === field.value);
  const handleChangeSelect = (selected) => {
    const option = selected ? selected.value : selected;
    const valueOption = {
      target: {
        name: field.name,
        value: option,
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
        value={valueSelected || null}
      />
    </GroupSelect>
  );
};

export default SelectElement;
