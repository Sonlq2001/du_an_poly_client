import React, { useState } from 'react';
import { ProductFile, Title, Product, Eye, Information } from './style';
const ProductProfile = () => {
  const [toggle, isToggle] = useState(true);
  const str = 'Website xây dựng bán hàng toàn quốc';
  // cắt chuỗi khi chuỗi quá dài
  return (
    <ProductFile>
      <Title>
        <button
          className={toggle ? 'activeProfile' : ''}
          onClick={() => {
            isToggle(true);
          }}
        >
          Project
        </button>
        <button
          className={!toggle ? 'activeProfile ' : ''}
          onClick={() => {
            isToggle(false);
          }}
        >
          {' '}
          About
        </button>
      </Title>
      <div className={toggle ? 'show' : 'hidden'}>
        <Product className="row ">
          <div className="productItem col-3">
            <div>
              <img
                src="https://pbs.twimg.com/profile_images/439581938337067009/xA_dkmW8_400x400.jpeg"
                alt=""
              />
            </div>
            <div className="contenPro">
              <p className="title">{str.slice(0, 19) + '...'}</p>
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
              <p className="title">{str.slice(0, 19) + '...'}</p>
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
              <p className="title">Dự án 1 </p>
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
      </div>
      <div className={toggle ? 'hidden' : 'show'}>
        <Information info>
          <div className="left">
            <li> Họ và tên : </li>
            <li> Khóa :</li>
            <li> Năm Sinh :</li>
            <li>Phone :</li>
          </div>
          <div className="right">
            <li>Nguyễn Hữu Sơn</li>
            <li>Lập trình website</li>
            <li>1999</li>
            <li>0123456789</li>
          </div>
        </Information>
      </div>
    </ProductFile>
  );
};

export default ProductProfile;
