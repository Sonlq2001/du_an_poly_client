import React, { memo } from 'react';
import { GrAttachment } from 'react-icons/gr';

import { GroupAttach, ItemAttach } from './AttachDoc.styles';
import { TitleMain } from './../../screens/DetailScreen/DetailScreen.styles';

const AttachDoc = ({ data }) => {
  return (
    <>
      <TitleMain>
        <GrAttachment />
        <span>Tài liệu đính kèm</span>
      </TitleMain>

      <GroupAttach>
        <ItemAttach>
          <div className="title-attach">Tài Liệu : </div>
          <a href={data?.resource_url} target="_blank" rel="noreferrer">
            {data?.resource_url}
          </a>
        </ItemAttach>
      </GroupAttach>
    </>
  );
};

export default memo(AttachDoc);
