import React from 'react';
import { useTypingEffect } from '../../hooks/useTypingEffect';

const WelcomeSection = () => {
  const typingText = "(I guess I am really bad at Frontend development.... I feel so sorry if the design is unpleasant to you. -,-)";
  const { ref } = useTypingEffect(typingText);

  return (
    <>
      <div className='Container text-center'>
        <h1 style={{ flex: '1 1 100px' }}>Welcome to My Personal Website</h1>
      </div>
      
      <div className='Container' style={{justifyContent: 'center'}}>
        <p ref={ref} style={{ fontSize: "17px" }}></p>
      </div>

      <div className='Container text-center space'>
        <p style={{ flex: '1 1 100px' }} className='text-center'> 
          This website is built around node.js, Go Lang, Python and MongoDB.<br></br> 
          I made this website in order to train my full stack skills. You may check out the source code on my github.
          <br></br>
          It showcases my education and projects. I will also share some personal things and ideas here. 🙂 
        </p>
      </div>
    </>
  );
};

export default WelcomeSection;
