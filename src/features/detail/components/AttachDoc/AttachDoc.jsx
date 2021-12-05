import React, { memo } from 'react';
import { GrAttachment } from 'react-icons/gr';
import { AiFillFileText } from 'react-icons/ai';

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
          <button>
            <a href={data?.resource_url} target="_blank" rel="noreferrer">
              <AiFillFileText /> Tại đây
            </a>
          </button>
        </ItemAttach>
      </GroupAttach>
    </>
  );
};

export default memo(AttachDoc);
