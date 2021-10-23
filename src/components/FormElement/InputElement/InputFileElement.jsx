import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { GroupFormFile } from './InputElement.styles';
import api from './../../../api/api';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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
  const [loadingDocument, setLoadingDocument] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingGalleries, setLoadingGalleries] = useState(false);
  const [nameFile, setNameFile] = useState('');

  const { setFieldValue } = useFormikContext();
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    const files = e.target.files;
    const formData = new FormData();
    const galleriesList = new FormData();
    formData.append('resource_url', file && file);
    formData.append('name', file && file.name);
    setNameFile(file && file.name);
    if (file.size < 5097152) {
      if (name === 'resource_url') {
        setLoadingDocument(true);
        file &&
          api
            .post('/products/document', formData)
            .then(
              (res) =>
                setFieldValue(name, res.data.resource_url) +
                setStatusDocument(true) +
                setLoadingDocument(false)
            );
      } else if (name === 'galleries') {
        const listImage = Array.from(files);

        const arrayGalleries =
          files &&
          listImage.map((item) => {
            return galleriesList.append('galleries[]', item);
          });
        setLoadingGalleries(true);
        arrayGalleries.length > 0 &&
          api
            .post('/products/galleries', galleriesList)
            .then(
              (res) =>
                setFieldValue(name, res.data.array_url) +
                setStatusGalleries(true) +
                setLoadingGalleries(false) +
                setListImage(res.data.array_url)
            );
      } else {
        setLoadingImage(true);
        formData.append('image', file);
        file &&
          api
            .post('/products/image', formData)
            .then(
              (res) =>
                setFieldValue(name, res.data.image_url) +
                setLoadingImage(false)
            );
      }
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
          id={id}
          className="form-input__file form-input"
          {...props}
          multiple={multiple}
          onChange={handleChangeFile}
        />
        <div className="file-text">
          {content && !nameFile ? content : nameFile}
        </div>
        {loadingDocument ? (
          <div className="loading">
            <AiOutlineLoading3Quarters />
          </div>
        ) : null}
        {loadingImage ? (
          <div className="loading">
            <AiOutlineLoading3Quarters />
          </div>
        ) : null}
        {loadingGalleries ? (
          <div className="loading">
            <AiOutlineLoading3Quarters />
          </div>
        ) : null}
      </label>
    </GroupFormFile>
  );
};

export default InputFileElement;
