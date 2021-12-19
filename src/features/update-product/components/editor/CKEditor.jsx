import React, { useState } from 'react';

import ConfigEditor from './ConfigEditor';
const CKEditor = (props) => {
  const [editor, setEditor] = useState(props.data);
  return (
    <ConfigEditor
      handleChange={(data) => {
        setEditor(data);
      }}
      data={editor}
      dataOld={props.data}
      {...props}
      
    />
  );
};

export default CKEditor;
