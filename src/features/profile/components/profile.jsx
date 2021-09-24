import React from 'react';
import { HeaderProfile, Avatar, Information } from './style';

const Profile = () => {
  return (
    <HeaderProfile className="profile">
      <Avatar className="avatar">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </Avatar>
      <Information className="information">
        <div className="left">
          <li>Họ và Tên </li>
          <li>Email </li>
          <li> Mssv </li>
          <li>Chuyên ngành </li>
          <li>Link git </li>
          <li>Cv cá nhân </li>
          <li>Facebook </li>
        </div>
        <div className="rigth">
          <li>Nguyễn Hữu Sơn </li>
          <li>Sonnhph12562@fpt.edu.vn </li>
          <li> Ph12562 </li>
          <li> Lập trình website </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/
            </a>
          </li>
          <li>
            <a
              href="https://www.topcv.vn/cv-la-gi"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.topcv.vn/cv-la-gi
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/
            </a>
          </li>
        </div>
      </Information>
    </HeaderProfile>
  );
};

export default Profile;
