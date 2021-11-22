import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';
import { useFormikContext } from 'formik';

const ConfigEditor = ({ handleChange, ...props }) => {
  const { setFieldValue } = useFormikContext(props);
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise(async (resolve, reject) => {
          const formData = new FormData();
          const res = await loader.file;
          formData.append('url_image', res);

          const {
            data: { link_image },
          } = await Axios.post(
            'http://api.duanpoly.ml/api/products/createimage',
            formData
          );

          resolve({
            default: link_image,
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
