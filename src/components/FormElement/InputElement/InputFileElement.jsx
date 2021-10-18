import React from 'react';
import { useFormikContext } from 'formik';

import { GroupFormFile } from './InputElement.styles';
import api from './../../../api/api';

const InputFileElement = ({
  label,
  name,
  type,
  placeholder,
  id,
  content,
  multiple,
  ...props
}) => {
  const { setFieldValue, values } = useFormikContext();

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    if (name === 'image') {
      if (file.size < 5097152) {
        api.post('/products/document', file).then((res) => console.log(res));
      }
    }
    // multiple
    //   ? setFieldValue(name, e.target.files)
    //   : setFieldValue(name, e.target.files[0]);
  };

  return (
    <GroupFormFile>
      {label && (
        <label htmlFor="" className="form-label">
          {label}
        </label>
      )}
      <label htmlFor={id} className="form-label__file">
        <input
          type="file"
          className="form-input"
          id={id}
          className="form-input__file"
          {...props}
          multiple={multiple}
          onChange={handleChangeFile}
        />
        <div className="file-text">{content}</div>
      </label>
      <div>{values[name].name}</div>
      {/* {readImage && <img src={readImage} />} */}
    </GroupFormFile>
  );
};

export default InputFileElement;
