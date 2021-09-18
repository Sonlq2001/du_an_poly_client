import React from 'react';
import { ProductFile, Title, Product } from './style';
import styled from 'styled-components';
import { AiFillEye, AiOutlineEye } from 'react-icons/ai';
const Eye = styled(AiOutlineEye)`
  color: #ed8936;
  align-items: center;
  font-size: 16px;
  margin-right: 8px;
`;
const ProductProfile = () => {
  return (
    <ProductFile>
      <Title>Project</Title>
      <Product className="row">
        <div className="productItem col-3">
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/439581938337067009/xA_dkmW8_400x400.jpeg"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Dự Án 1 </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div>
            <img
              src="https://dean2020.edu.vn/wp-content/uploads/2019/03/anh-thien-nhien-dep-3.jpeg"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Dự Án 1 </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div>
            <img
              src="https://sohanews.sohacdn.com/2018/11/6/photo-1-1541483744832650156783.jpg"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Dự Án 1 </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div>
            <img
              src="https://sohanews.sohacdn.com/2018/11/6/photo-1-1541483744832650156783.jpg"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Dự Án 1 </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div>
            <img
              src="https://sohanews.sohacdn.com/2018/11/6/photo-1-1541483744832650156783.jpg"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Dự Án 1 </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div>
            <img
              src="https://sohanews.sohacdn.com/2018/11/6/photo-1-1541483744832650156783.jpg"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Dự Án 1 </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
      </Product>
    </ProductFile>
  );
};

export default ProductProfile;
