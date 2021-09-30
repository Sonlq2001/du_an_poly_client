import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { WapEDitor } from './Editor.styles';
const Editor = () => {
  return (
    <WapEDitor>
      <CKEditor editor={ClassicEditor} />
    </WapEDitor>
  );
};

export default Editor;
