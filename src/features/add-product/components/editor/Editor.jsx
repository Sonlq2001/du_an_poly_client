import React from 'react';
import ReactQuill from 'react-quill';
import { WarEditor } from './Editor.styles';
import EditorToolbar, { formats, modules } from './CustomEditor';
const Editor = ({ ChangeDescription }) => {
  const ChangeEditor = (data) => {
    ChangeDescription(data);
  };
  return (
    <WarEditor>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="chi tiết sản phẩm "
        onChange={ChangeEditor}
      />
    </WarEditor>
  );
};
export default Editor;
