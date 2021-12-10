import React, { useState } from 'react';
import { HeaderProfile, Avatar, Information } from './style';
import { Formik } from 'formik';
import { initForm } from '../helpers/profile.helpers';

import { useSelector } from 'react-redux';
const Profile = () => {
  const [status, setStatus] = useState(false);
  const { userLogin } = useSelector((state) => state.auth);
  const {profile} = useSelector((state) => state.productProfile);
  return (
    <HeaderProfile>
      <div className="profile">
        <Avatar className="avatar">
          <img
            src={
              profile?.avatar
                ? profile.avatar
                :"https://i.pinimg.com/236x/8d/a5/c3/8da5c3a06407303694d6381b23368f02.jpg"
            }
            alt=""
          />
        </Avatar>

        <Information className="information">
          {profile ?  (
            <div className="left">
              <li>Họ và Tên </li>
              <li>Email </li>
              <li> Mssv </li>
              <li>Chuyên ngành </li>
              <li className={status && 'label'}>Link git </li>
              <li className={status && 'label'}>Cv cá nhân</li>
              <li className={status && 'label'}>Facebook cá nhân </li>
            </div>
          ) : ""}
          <div className="rigth">
            {profile && profile?.name ? <li>{profile?.name} </li> : ''}
            {profile && profile?.email ? <li>{profile?.email} </li> : ''}
            {profile && profile.student_code ? (
              <li>{profile.student_code} </li>
            ) : (
              ''
            )}

            <li> Lập trình website </li>
            <Formik
              initialValues={{ ...initForm }}
              onSubmit={(value) => {
                console.log(value);
              }}
            >
              {({ handleChange, handleSubmit }) => (
                <form
                  onSubmit={handleSubmit}
                  hidden={
                    userLogin === null || userLogin.id !== profile?.id
                      ? true
                      : false
                  }
                >
                  <div className="inputForm">
                    <li>
                      {profile?.linkGit ? (
                        <a href="cấcvgbh"> link git </a>
                      ) : status ? (
                        <input
                          type="text"
                          className="inputGroup"
                          name="linkGit"
                          onChange={handleChange}
                          defaultValue="Link git  "
                        />
                      ) : (
                        ''
                      )}
                    </li>
                    <li>
                      {profile?.linkGit ? (
                        <a href="cấcvgbh"> link cv </a>
                      ) : status ? (
                        <input
                          type="text"
                          className="inputGroup"
                          name="CvIndividual"
                          onChange={handleChange}
                          defaultValue="Link cv  "
                        />
                      ) : (
                        ''
                      )}
                    </li>
                    <li>
                      {profile?.linkGit ? (
                        <a href="cấcvgbh"> link facebook</a>
                      ) : status ? (
                        <input
                          type="text"
                          className="inputGroup"
                          name="facebook"
                          defaultValue="Link Facebook  "
                          onChange={handleChange}
                        />
                      ) : (
                        ''
                      )}
                    </li>
                  </div>
                  {status && (
                    <button className={`btn ${status ? 'update' : ''}`}>
                      Cập nhật
                    </button>
                  )}
                  {!status && (
                    <label
                      hidden={
                        userLogin === null || userLogin.id !== profile?.id
                          ? true
                          : false
                      }
                      htmlFor=""
                      className="btn"
                      onClick={() => setStatus(!status)}
                    >
                      Cập Nhật
                    </label>
                  )}
                </form>
              )}
            </Formik>
          </div>
        </Information>
      </div>
    </HeaderProfile>
  );
};

export default Profile;
