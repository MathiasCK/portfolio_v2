import React from 'react';
import another from '../../images/another.svg';

const ShortAbout = () => {
  return (
    <div className='short-about'>
      <div className='main-h1-short-about'>
        <h1 className='main-short-about'>Shortly</h1>
        <h1 className='main-short-about'>About</h1>
        <h1 className='main-short-about'>MySelf!</h1>
      </div>
      <div className='sub-main-p-short-about'>
        <p className='sub-main-short-about'>
          I BELIEVE THAT EVERY PROJECT THAT I DO SHOULD HAVE AN OVERVALUE.
        </p>
        <p className='sub-main-short-about'>
          I ALWAYS TRY TO FIND THE OPTIMAL SOLUTION TO THE CLIENT'S TASK.
        </p>
      </div>
      <div className='another-svg'>
        <img src={another} alt='' />
      </div>
    </div>
  );
};

export default ShortAbout;
