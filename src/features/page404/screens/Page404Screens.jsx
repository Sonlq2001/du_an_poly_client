import React from 'react';
import {Form, Page, Paga} from './Page404Screens.styles';
const Page404Screens = () => {
  return ( 
  <Form>
    
    <Page>
      <div className = "pag">
           <img src = "https://i.pinimg.com/originals/cc/4d/aa/cc4daa9d54c97a1badec1f0fd9a327dc.gif" alt="" className="pag404"/>
      </div>
      </Page>
      <Paga>
        <div className="content">
          <h2>DON'T GET SCARED... YOU ARE LOST.</h2>
          <p>This is definitely not your house.</p>
          <h2>GO BACK HOME </h2>
        </div>
      </Paga>
  </Form>
  );
};

export default Page404Screens;
