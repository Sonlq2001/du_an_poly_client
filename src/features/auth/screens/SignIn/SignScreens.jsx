import React, { memo } from 'react';
import {Form,Image, Content} from './SignScreens.styles';
import ImageD from './../../../../assets/images/logo.png';
import Img from './../../../../assets/images/software_shutterstock_1290773869.jpg';
const SignScreens = () => {
  return (
      
      <Form>
          <Image>
             <div className="main">
             <img src={Img} alt="" className="box"/>
             </div>
          </Image>
          <Content>
              <div className="domain">
              <img src={ImageD} alt="" className="bot-img"/>
              <p>Cao đẳng thực hành Fptpolytechnic</p>
              <button type="google">Google</button>
              </div>
          </Content>
      </Form>
      
   
   
  );
};

export default memo(SignScreens);
