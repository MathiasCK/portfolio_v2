import React from 'react';
import './styles/getInTouch.styles.scss';
import flower2 from '../../images/flower2.svg';

const GetInTouch = () => {
  return (
    <div className='get-in-touch'>
      <h1>GET IN TOUCH</h1>
      <p>
        If you have any general project or enquiry feel free and contact me -
        available now!
      </p>
      <img src={flower2} alt='' />
    </div>
  );
};

export default GetInTouch;
