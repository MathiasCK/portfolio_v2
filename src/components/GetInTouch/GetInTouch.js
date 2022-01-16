import React from 'react';
import './GetInTouch.css';
import flower2 from '../../assets/flower2.svg';
function GetInTouch() {
  return (
    <div className='get-in-touch'>
      <h1>GET IN TOUCH</h1>
      <p>
        If you have any general project or enquiry feel free and contact us -
        available now!
      </p>
      <img src={flower2} alt='' />
    </div>
  );
}

export default GetInTouch;
