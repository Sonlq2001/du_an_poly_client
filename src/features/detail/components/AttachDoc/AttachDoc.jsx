import React, { memo } from 'react';
import { GrAttachment } from 'react-icons/gr';

import { GroupAttach, ItemAttach } from './AttachDoc.styles';
import { TitleMain } from './../../screens/DetailScreen/DetailScreen.styles';

const AttachDoc = () => {
  return (
    <>
      <TitleMain>
        <GrAttachment />
        <span>Tài liệu đính kèm</span>
      </TitleMain>

      <GroupAttach>
        <ItemAttach>
          <div className="title-attach">Link github:</div>
          <a href="!#">
            https://caodang.fpt.edu.vn/tin-tuc-poly/nu-sinh-fpoly-tay-nguyen-dat-chung-chi-cuoc-thi-vo-dich-thiet-ke-do-hoa-the-gioi.html
          </a>
        </ItemAttach>
        <ItemAttach>
          <div className="title-attach">Tài liệu hướng dẫn:</div>
          <a href="!#">
            https://caodang.fpt.edu.vn/tin-tuc-poly/nu-sinh-fpoly-tay-nguyen-dat-chung-chi-cuoc-thi-vo-dich-thiet-ke-do-hoa-the-gioi.html
          </a>
        </ItemAttach>
        <ItemAttach>
          <div className="title-attach">Tài liệu bài viết:</div>
          <a href="!#">
            https://caodang.fpt.edu.vn/tin-tuc-poly/nu-sinh-fpoly-tay-nguyen-dat-chung-chi-cuoc-thi-vo-dich-thiet-ke-do-hoa-the-gioi.html
          </a>
        </ItemAttach>
        <ItemAttach>
          <div className="title-attach">Video youtube:</div>
          <a href="!#">
            https://caodang.fpt.edu.vn/tin-tuc-poly/nu-sinh-fpoly-tay-nguyen-dat-chung-chi-cuoc-thi-vo-dich-thiet-ke-do-hoa-the-gioi.html
          </a>
        </ItemAttach>
      </GroupAttach>
    </>
  );
};

export default memo(AttachDoc);
