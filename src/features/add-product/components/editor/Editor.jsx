import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { WapEDitor } from './Editor.styles';
const Editor = ({ ChangeDescription }) => {
  return (
    <WapEDitor>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          ChangeDescription(data);
        }}
      />
    </WapEDitor>
  );
};

export default Editor;
