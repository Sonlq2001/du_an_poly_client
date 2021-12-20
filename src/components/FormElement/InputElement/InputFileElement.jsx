import React, { useState } from 'react';
import { GroupFormFile } from './InputElement.styles';
import api from './../../../api/api';
import { AiOutlineLoading3Quarters, AiOutlineCheck } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import {
  removeDocument,
  removeImage,
} from 'features/add-product/redux/add-product.slice';

const InputFileElement = ({
  label,
  name,
  type,
  placeholder,
  id,
  content,
  multiple,
  setListImage,
  listImages,
  linkAvatar,
  setLinkAvatar,
  LinkDoc,
  setLinkDoc,
  ...props
}) => {
  const dispatch = useDispatch();
  const [loadingDocument, setLoadingDocument] = useState(0);
  const [loadingImage, setLoadingImage] = useState(0);
  const [loadingGalleries, setLoadingGalleries] = useState(0);
  const [nameFile, setNameFile] = useState('');

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    const files = e.target.files;
    const formData = new FormData();
    const galleriesList = new FormData();

    if (name === 'resource_url') {
      if (file) {
        formData.append('resource_url', file);
        formData.append('name', file && file.name);
        setLoadingDocument(1);
        if (LinkDoc) {
          const link = { resource_url: LinkDoc };
          dispatch(removeDocument(link));

          api
            .post('/products/document', formData)
            .then(
              (res) =>
                setLinkDoc(res.data.resource_url) +
                setLoadingDocument(2) +
                setNameFile(file && file.name)
            )
            .catch(
              (errors) =>
                setNameFile(
                  errors ? 'Lỗi' : 'Dung lượng quá lớn !  Không quá 10MB'
                ) + setLoadingDocument(3)
            );
        } else {
          api
            .post('/products/document', formData)
            .then(
              (res) =>
                setLinkDoc(res.data.resource_url) +
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
            return item;
          });
        setLoadingGalleries(1);
        arrayGalleries.length > 0 &&
          api
            .post('/products/galleries', galleriesList)
            .then(
              (res) =>
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
    } else {
      if (file && file.size <= 3145728) {
        setLoadingImage(1);
        formData.append('image', file);
        if (linkAvatar) {
          const url_image = { img_url: linkAvatar };
          dispatch(removeImage(url_image));
          api
            .post('/products/image', formData)
            .then(
              (res) =>
                setLinkAvatar(res.data.image_url) +
                setLoadingImage(2) +
                setNameFile(file && file.name)
            )
            .catch(
              (errors) =>
                setNameFile(
                  errors ? 'Lỗi' : 'Dung lượng ảnh quá lớn ! Không quá 3MB'
                ) + setLoadingImage(3)
            );
        } else {
          api
            .post('/products/image', formData)
            .then(
              (res) =>
                setLinkAvatar(res.data.image_url) +
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
