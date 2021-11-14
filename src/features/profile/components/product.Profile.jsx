import React, { useState } from 'react';
import { ProductFile, Title, Product, Eye } from './style';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

import { useSelector } from 'react-redux';
const ProductProfile = ({ id, profile }) => {
  const str = 'Website xây dựng bán hàng toàn quốc';
  const [toggle, setToggle] = useState(1);
  const { userLogin } = useSelector((state) => state.auth);
  // cắt chuỗi khi chuỗi quá dài
  return (
    <ProductFile>
      <Title>
        <button
          className={toggle === 1 ? 'active-tabs' : ''}
          onClick={() => setToggle(1)}
        >
          Project
        </button>
        <button
          hidden={
            userLogin === null || userLogin.id !== profile.id ? true : false
          }
          className={toggle === 2 ? 'active-tabs' : ''}
          onClick={() => setToggle(2)}
        >
          Chờ duyệt
        </button>
      </Title>
      <div className={toggle === 1 ? 'show' : 'hidden'}>
        <Product>
          <div className="productItem ">
            <div className="productImage">
              <div className="overlay"> </div>
              <Link to="/product/1">
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
          <div className="productItem ">
            <div className="productImage">
              <div className="overlay"> </div>
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
          <div className="productItem ">
            <div className="productImage">
              <div className="overlay"> </div>
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
          <div className="productItem ">
            <div className="productImage">
              <div className="overlay"> </div>
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
          <div className="productItem ">
            <div className="productImage">
              <div className="overlay"> </div>
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
        <Pagination />
      </div>
      <div
        hidden={
          userLogin === null || userLogin.id !== profile.id ? true : false
        }
        hidden={true}
        className={toggle === 2 ? 'show' : 'hidden'}
      >
        {userLogin === null || userLogin.id !== profile.id ? (
          <div className="message">
            Bạn Cần <Link to="/sign-in">Đăng Nhập </Link> để xem
          </div>
        ) : (
          <>
            <Product>
              <div className="productItem ">
                <div className="productImage">
                  <div className="overlay"> </div>
                  <img
                    src="https://i.pinimg.com/564x/25/99/9a/25999ad05b6a91e4a905a532b965c93c.jpg"
                    alt=""
                  />
                </div>
                <div className="contenPro">
                  <p className="title">{str.slice(0, 20) + ' ...'}</p>
                </div>
              </div>
              <div className="productItem ">
                <div className="productImage">
                  <div className="overlay"> </div>
                  <img
                    src="https://wiki.matbao.net/wp-content/uploads/2019/09/iframe-la-gi.png"
                    alt=""
                  />
                </div>
                <div className="contenPro">
                  <p className="title">Ứng dụng phầm mềm </p>
                </div>
              </div>
              <div className="productItem ">
                <div className="productImage">
                  <div className="overlay"> </div>
                  <img
                    src="https://dsgc.edu.vn/wp-content/uploads/2019/08/123.jpg"
                    alt=""
                  />
                </div>
                <div className="contenPro">
                  <p className="title">Thiết kế đồ họa </p>
                </div>
              </div>
              <div className="productItem ">
                <div className="productImage">
                  <div className="overlay"> </div>
                  <Link to="/product/1">
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
                </div>
              </div>
            </Product>
            <Pagination />
          </>
        )}
      </div>
    </ProductFile>
  );
};

export default ProductProfile;
