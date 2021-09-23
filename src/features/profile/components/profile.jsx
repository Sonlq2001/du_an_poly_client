import React from 'react';
import { HeaderProfile, Avatar, Information } from './style';
const Profile = () => {
  return (
    <HeaderProfile className="profile">
      <Avatar className="avatar">
        <img
          src="https://i.pinimg.com/474x/b8/d0/ca/b8d0ca1517e1159556efac1a89a7739d.jpg"
          alt=""
        />
      </Avatar>
      <Information className="information">
        <ul>
          <li>
            <h3>Nguyễn Hữu Sơn</h3>
          </li>
          <li>
            <h3 className="Adress"> Lập trình website</h3>
          </li>
        </ul>
      </Information>
    </HeaderProfile>
  );
};

export default Profile;
