import React, { useState } from 'react';

import ConfigEditor from './ConfigEditor';
const CKEditor = (props) => {
  const [editor, setEditor] = useState(props);
  return (
    <ConfigEditor
      handleChange={(data) => {
        setEditor(data);
      }}
      data={editor}
      dataOld={props.data}
      {...props}
      value="xnc aif "
    />
  );
};

export default CKEditor;
