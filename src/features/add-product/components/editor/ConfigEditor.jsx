import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';
import { useFormikContext } from 'formik';

const ConfigEditor = ({ handleChange, ...props }) => {
  const { setFieldValue } = useFormikContext();
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise(async (resolve, reject) => {
          const formData = new FormData();
          const res = await loader.file;
          formData.append('file', res);
          formData.append('upload_preset', 'ug5tpbky');

          const {
            data: { secure_url },
          } = await Axios.post(
            'https://api.cloudinary.com/v1_1/sonel/image/upload',
            formData
          );
          resolve({
            default: secure_url,
          });
        });
      },
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  return (
    <div className="App">
      <CKEditor
        config={{
          extraPlugins: [uploadPlugin],
        }}
        editor={ClassicEditor}
        onReady={(editor) => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          setFieldValue('description', data);
        }}
      />
    </div>
  );
};

export default ConfigEditor;
