import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

import { GroupBreadcrumbs } from './Breadcrumb.styles';
import { HOME_PATH } from 'features/home/constants/home.paths';

const Breadcrumb = ({ position }) => {
  return (
    <div className="container">
      <GroupBreadcrumbs>
        <Link to={HOME_PATH.HOME} className="breadcrumb-item">
          Trang chủ
        </Link>
        {position && (
          <>
            <span className="breadcrumb-icon">
              <BsChevronRight />
            </span>
            <span className="breadcrumb-item">{position}</span>
          </>
        )}
      </GroupBreadcrumbs>
    </div>
  );
};

export default Breadcrumb;
