import React, { memo } from 'react';
import { BiShareAlt } from 'react-icons/bi';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

import { TitleMain } from './../../screens/DetailScreen/DetailScreen.styles';
import { GroupShare } from './ShareSocial.styles';

const ShareSocial = () => {
  return (
    <>
      <TitleMain>
        <BiShareAlt />
        <span>Chia sẻ</span>
      </TitleMain>

      <GroupShare>
        <button className="button-social share-facebook">
          <FaFacebookSquare />
        </button>
        <button className="button-social share-twitter">
          <FaTwitterSquare />
        </button>
        <button className="button-social share-instagram">
          <FaInstagram />
        </button>
        <button className="button-social share-linkedin">
          <FaLinkedin />
        </button>
      </GroupShare>
    </>
  );
};

export default memo(ShareSocial);
