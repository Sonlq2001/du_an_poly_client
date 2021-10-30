import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { GroupFormFile } from './InputElement.styles';
import api from './../../../api/api';
import { AiOutlineLoading3Quarters, AiOutlineCheck } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';

const InputFileElement = ({
  label,
  name,
  type,
  placeholder,
  id,
  content,
  multiple,
  setStatusDocument,
  setListImage,
  setStatusVideo,
  setLinkVideo,
  listImages,
  ...props
}) => {
  const [loadingDocument, setLoadingDocument] = useState(0);
  const [loadingImage, setLoadingImage] = useState(0);
  const [loadingGalleries, setLoadingGalleries] = useState(0);
  const [loadingVideo, setLoadingVideo] = useState(0);
  const [nameFile, setNameFile] = useState('');
  const { setFieldValue } = useFormikContext();
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    const files = e.target.files;
    const formData = new FormData();
    const galleriesList = new FormData();
    formData.append('resource_url', file && file);
    formData.append('name', file && file.name);

    if (name === 'resource_url') {
      if (file.size <= 31457280) {
        setLoadingDocument(1);
        file &&
          api
            .post('/products/document', formData)
            .then(
              (res) =>
                setFieldValue(name, res.data.resource_url) +
                setStatusDocument(true) +
                setLoadingDocument(2) +
                setNameFile(file && file.name)
            )
            .catch(
              (errors) =>
                setNameFile(
                  errors ? 'Lỗi' : 'Dung lượng quá lớn !  Không quá 10MB'
                ) + setLoadingDocument(3)
            );
      }
    } else if (name === 'galleries') {
      const listImage = Array.from(files);
      const lengthGallery = 6 - listImages.length;
      if (listImage.length <= 6 && listImages.length <= 6) {
        const arrayGalleries =
          files &&
          listImage.map((item, index) => {
            if (item.size < 3145728 && index + 1 <= lengthGallery) {
              return galleriesList.append('galleries[]', item);
            }
          });
        setLoadingGalleries(1);
        arrayGalleries.length > 0 &&
          api
            .post('/products/galleries', galleriesList)
            .then(
              (res) =>
                // setFieldValue(name, res.data.array_url) +
                setLoadingGalleries(2) +
                setListImage([...listImages, ...res.data.array_url]) +
                setNameFile('')
            )
            .catch(
              (errors) =>
                setLoadingGalleries(3) +
                setNameFile(
                  errors ? 'Lỗi' : 'Không được để quá 6 ảnh- Không quá 3MB'
                )
            );
      } else {
        setNameFile('Không được để quá 6 ảnh - Không quá 3MB');
        setLoadingGalleries(3);
        setNameFile(file && file.name);
      }
    } else if (name === 'video_url') {
      if (file.size < 3145728) {
        setLoadingVideo(1);
        formData.append('video_url', file);
        file &&
          api
            .post('/products/image', formData)
            .then(
              (res) =>
                setFieldValue(name, res.data.image_url) +
                setLoadingVideo(2) +
                setLinkVideo(res.data.image_url) +
                setNameFile(file && file.name)
            )
            .catch(
              (errors) =>
                setLoadingVideo(3) +
                setNameFile(
                  errors ? 'Lỗi' : 'Dung lượng quá lớn,Không quá 30MB '
                )
            );
      } else {
        setNameFile('Dung lượng quá lớn,Không quá 30MB');
        setLoadingVideo(3);
        setNameFile(file && file.name);
      }
    } else {
      if (file.size <= 3145728) {
        setLoadingImage(1);
        formData.append('image', file);
        file &&
          api
            .post('/products/image', formData)
            .then(
              (res) =>
                setFieldValue(name, res.data.image_url) +
                setLoadingImage(2) +
                setNameFile(file && file.name)
            )
            .catch(
              (errors) =>
                setNameFile(
                  errors ? 'Lỗi' : 'Dung lượng ảnh quá lớn ! Không quá 3MB'
                ) + setLoadingImage(3)
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
          disabled={props.disabled}
          onChange={handleChangeFile}
        />
        <div className="file-text">
          {content && !nameFile ? content : nameFile}
        </div>
        {loadingVideo === 1 && (
          <div className="loading">
            <AiOutlineLoading3Quarters />
          </div>
        )}
        {loadingVideo === 2 && (
          <div className="check">
            <AiOutlineCheck />
          </div>
        )}
        {loadingVideo === 3 && (
          <div className="error">
            <BiErrorCircle />
          </div>
        )}
        {loadingDocument === 1 && (
          <div className="loading">
            <AiOutlineLoading3Quarters />
          </div>
        )}
        {loadingDocument === 2 && (
          <div className="check">
            <AiOutlineCheck />
          </div>
        )}
        {loadingDocument === 3 && (
          <div className="error">
            <BiErrorCircle />
          </div>
        )}
        {loadingImage === 1 ? (
          <div className="loading">
            <AiOutlineLoading3Quarters />
          </div>
        ) : null}
        {loadingImage === 2 && (
          <div className="check">
            <AiOutlineCheck />
          </div>
        )}
        {loadingImage === 3 && (
          <div className="error">
            <BiErrorCircle />
          </div>
        )}
        {loadingGalleries === 1 ? (
          <div className="loading">
            <AiOutlineLoading3Quarters />
          </div>
        ) : null}
        {loadingGalleries === 2 && listImages.length > 0 && (
          <div className="check">
            <AiOutlineCheck />
          </div>
        )}
        {loadingGalleries === 3 && (
          <div className="error">
            <BiErrorCircle />
          </div>
        )}
      </label>
    </GroupFormFile>
  );
};

export default InputFileElement;
