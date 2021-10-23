import React, { useState } from 'react';
import { useFormikContext } from 'formik';

const AddStudent = ({ name }) => {
  const { setFieldValue } = useFormikContext();

  const [value, setValue] = useState('');
  // const [groupValue, setGroupValue] = useState([]);
  const array = [];

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    array.push(value);
    // setGroupValue([...groupValue, value]);
    setValue('');
    setFieldValue(name, array);
  };

  const handleRemove = (value) => {
    // const result = groupValue.filter((item) => item !== value);
    // setGroupValue(result);
  };

  // const handleBlur = () => {
  //   console.log(groupValue, 'trong');
  // };

  return (
    <>
      <input
        name={name}
        placeholder="Nhập sinh viên"
        value={value}
        onChange={handleChangeValue}
        // onBlur={handleBlur}
      />
      <div onClick={handleClick}>thêm</div>

      {/* {groupValue.length > 0
        ? groupValue.map((item) => (
            <div key={item}>
              <mark>{item}</mark>
              <span onClick={() => handleRemove(item)}>xoa</span>
            </div>
          ))
        : ''} */}
    </>
  );
};

export default AddStudent;
