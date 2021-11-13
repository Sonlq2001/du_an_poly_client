import React, { memo } from 'react';
import { CgToolbox } from 'react-icons/cg';

import { LIST_TOOLS } from './../../constants/detail.constants';
import { GroupTools } from './ToolsDetail.styles';
import { TitleMain } from './../../screens/DetailScreen/DetailScreen.styles';

const ToolsDetail = () => {
  return (
    <>
      <TitleMain>
        <CgToolbox />
        <span>Công cụ</span>
      </TitleMain>

      <GroupTools>
        {LIST_TOOLS.map((tool, index) => (
          <img key={index} src={tool.img} alt="" className="img-tools" />
        ))}
      </GroupTools>
    </>
  );
};

export default memo(ToolsDetail);
