import React from 'react';
import { ProductFile, Title, Product, Eye } from './style';
import { Link } from 'react-router-dom';

const ProductProfile = () => {
  const str = 'Website xây dựng bán hàng toàn quốc';
  // cắt chuỗi khi chuỗi quá dài
  return (
    <ProductFile>
      <Title>Project</Title>
      <Product className="row">
        <div className="productItem col-3">
          <div className="productImage">
            <Link to="/product/1">
              {' '}
              <img
                src="https://i.pinimg.com/originals/de/91/27/de91277cf048a4954346d2ab353291a9.png"
                alt=""
              />
            </Link>
          </div>
          <div className="contenPro">
            <p className="title">
              <Link to="/product/1"> {str.slice(0, 20) + ' ...'} </Link>
            </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div className="productImage">
            <img
              src="https://i.pinimg.com/564x/25/99/9a/25999ad05b6a91e4a905a532b965c93c.jpg"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">{str.slice(0, 20) + ' ...'}</p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div className="productImage">
            <img
              src="https://wiki.matbao.net/wp-content/uploads/2019/09/iframe-la-gi.png"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Ứng dụng phầm mềm </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div className="productImage">
            <img
              src="https://dsgc.edu.vn/wp-content/uploads/2019/08/123.jpg"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Thiết kế đồ họa </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div className="productImage">
            <img
              src="https://dsgc.edu.vn/wp-content/uploads/2019/08/123.jpg"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Thiết kế đồ họa </p>
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
