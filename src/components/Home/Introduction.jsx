import React from 'react';

const Introduction = ({ text1, text2, text3, text4, text5, p1 }) => {
  return (
    <>
      <div className='container'>
        <div className='container1'>
          <div className='txt-line' id='mathias'>
            <p ref={el => (text1 = el)}>Mathias</p>
          </div>
          <div className='txt-line line-bottom' id='kolberg'>
            <p ref={el => (text2 = el)}>Kolberg</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className='left-side-quote'>
        <p ref={el => (p1 = el)}>
          I create didgital experiences that merge art <br /> direction,
          branding, creative strategy, web <br /> design, prototyping, and
          digital interactions.
        </p>
      </div>
      <div className='container'>
        <div></div>
        <div className='container1'>
          <div className='txt-line' id='full-stack'>
            <p ref={el => (text3 = el)}>Full-stack</p>
          </div>
          <div className='txt-line line-bottom' id='designer'>
            <p ref={el => (text4 = el)}>Javascript</p>
          </div>
          <div className='txt-line line-bottom' id='designer'>
            <p ref={el => (text5 = el)}>developer.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
