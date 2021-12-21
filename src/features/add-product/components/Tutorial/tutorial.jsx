import React from 'react';
import { Overlay, Title, Wappage } from './tutorial.styles';
const Tutorial = ({setTutorial,tutorial}) => {
  return (
      <Overlay  onClick={()=>setTutorial(!tutorial)} className={tutorial ? 'active' : ''}>  
      <Wappage className={tutorial ? 'activeContent':''}>
        <Title> Hướng dẫn thêm sản phẩm </Title>
         <ul>
              <li> Nhập đầy đủ tên, video... </li>
               <li><h4>Link Video</h4></li>
         </ul>

      </Wappage >
        </Overlay>
     
  );
};
export default Tutorial;
