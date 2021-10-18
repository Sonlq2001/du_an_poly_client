import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import { useFormikContext } from 'formik';

import { WarEditor } from './Editor.styles';
import EditorToolbar, { formats } from './CustomEditor';

function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

const Editor = ({ name }) => {
  const editor = useRef();
  const { setFieldValue } = useFormikContext();
  const ChangeEditor = (data) => {
    setFieldValue(name, data);
  };
  // const ChangeImage = () => {
  //   const input = document.createElement('input');
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('multiple', 'multiple');
  //   input.setAttribute('accept', 'image/*');
  //   input.click();
  //   input.onchange = async (e) => {
  //     const file = e.target.files;
  //     console.log('object, ', file);
  //     const targetEditor = editor.current.getEditor();
  //     const curentSpace = targetEditor.getSelection(true);
  //     // const res = await uploadFile(file.name, file);
  //     targetEditor.insertEmbed(
  //       curentSpace.index,
  //       'image',
  //       'https://imgt.taimienphi.vn/cf/Images/ba/2021/8/6/hinh-anh-ho-nuoc-dep-1.jpg'
  //     );
  //   };
  // };
  const modules = {
    toolbar: {
      container: '#toolbar',
      handlers: {
        undo: undoChange,
        redo: redoChange,
      },
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
  };

  return (
    <WarEditor>
      <EditorToolbar />
      <ReactQuill
        ref={(data) => (editor.current = data)}
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
