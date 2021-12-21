import React, { memo } from 'react';
import { GrAttachment } from 'react-icons/gr';
import { AiFillFileText } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import FileSaver from 'file-saver';

import { GroupAttach, ItemAttach } from './AttachDoc.styles';
import { TitleMain } from './../../screens/DetailScreen/DetailScreen.styles';
import { postDownloadDocs } from '../../redux/detail.slice';

const AttachDoc = ({ data }) => {
  const dispatch = useDispatch();
  const popupWindow = (url, title, w, h) => {
    var left = window.screen.width / 2 - w / 2;
    var top = window.screen.height / 2 - h / 2;
    return window.open(
      url,
      title,
      `toolbar=no, location=no,directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`
    );
  };

  const handleDownloadDocs = async () => {
    const response = await dispatch(
      postDownloadDocs({
        link: data?.resource_url,
      })
    );

    if (postDownloadDocs.fulfilled.match(response)) {
      console.log(response);
      const blob = new Blob([response], { type: 'charset=utf-8;' });
      FileSaver.saveAs(blob, `file`);
    }
  };

  return (
    <>
      <TitleMain>
        <GrAttachment />
        <span>Tài liệu đính kèm</span>
      </TitleMain>

      <GroupAttach>
        <ItemAttach>
          <button
            onClick={() =>
              popupWindow(data?.resource_url, 'Tài liệu', '600', '600')
            }
          >
            <a href={data?.resource_url} target="_blank" rel="noreferrer">
              <AiFillFileText /> Xem tài liệu
            </a>
          </button>
        </ItemAttach>

        <ItemAttach>
          <button onClick={() => handleDownloadDocs()}>
            <FiDownload /> Tải tài liệu
          </button>
        </ItemAttach>
      </GroupAttach>
    </>
  );
};

export default memo(AttachDoc);
