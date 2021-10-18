import React from 'react';
import { useFormikContext } from 'formik';
// import store from '../../../redux/store';
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
  setStatusDocument,
  setStatusGalleries,
  setListImage,
  ...props
}) => {
  const { setFieldValue, values } = useFormikContext();
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    const files = e.target.files;
    const formData = new FormData();
    const galleriesList = new FormData();
    formData.append('resource_url', file);
    formData.append('name', file.name);
    if (file.size < 5097152) {
      if (name === 'resource_url') {
        api
          .post('/products/document', formData)
          .then(
            (res) =>
              console.log('resource_url', res) +
              setFieldValue(name, res.data.resource_url) +
              setStatusDocument(true)
          );
      } else if (name === 'galleries') {
        const listImage = Array.from(files);

        const abc = listImage.map((item) => {
          return galleriesList.append('galleries[]', item);
        });
        abc.length > 0 &&
          api
            .post('/products/galleries', galleriesList)
            .then(
              (res) =>
                console.log('galleries', res) +
                setFieldValue(name, res.data.array_url) +
                setStatusGalleries(true) +
                setListImage(res.data.array_url)
            );
      }
      setFieldValue('image', file);
      // multiple
      // ? setFieldValue(name, e.target.files)
      // : setFieldValue(name, e.target.files[0]);
    }
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
      {/* <div>{values[name].name}</div> */}
      {/* {readImage && <img src={readImage} />} */}
    </GroupFormFile>
  );
};

export default InputFileElement;
