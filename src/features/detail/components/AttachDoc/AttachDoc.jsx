import React, { memo } from 'react';
import { GrAttachment } from 'react-icons/gr';
import { AiFillFileText } from 'react-icons/ai';



import { GroupAttach, ItemAttach } from './AttachDoc.styles';
import { TitleMain } from './../../screens/DetailScreen/DetailScreen.styles';

const AttachDoc = ({ data }) => {

  const  popupWindow = (url, title, w, h)=> {
    var left = (window.screen.width / 2) - (w / 2);
    var top = (window.screen.height / 2) - (h / 2);
    return window.open(url,title ,`toolbar=no, location=no,directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`)
}
  return (
    <>
      <TitleMain>
        <GrAttachment />
        <span>Tài liệu đính kèm</span>
      </TitleMain>

      <GroupAttach>
        <ItemAttach>
          <button onClick={()=> popupWindow(data?.resource_url,"Tài liệu","600","600")}>
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
