import React, { useState } from 'react';

import ConfigEditor from './ConfigEditor';
const CKEditor = (props) => {
  const [editor, setEditor] = useState(null);

  return (
    <ConfigEditor
      handleChange={(data) => {
        setEditor(data);
      }}
      data={editor}
      {...props}
    />
  );
};

export default CKEditor;
