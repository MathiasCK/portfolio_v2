import React, { useEffect, useRef } from 'react';
import { Navbar } from '../../components';
import './styles/contact.styles.scss';
import flower from '../../assets/flower.svg';
import gsap from 'gsap';

const Contact = () => {
  const timeline_contact = gsap.timeline();
  let text1 = useRef(null);
  useEffect(() => {
    timeline_contact.from(
      text1,
      {
        duration: 1,
        skewY: 10,
        y: 500,
        stagger: {
          amount: 0.4,
        },
        opacity: 0,
      },
      '-=1',
    );
  });
  return (
    <div>
      <Navbar timeline={timeline_contact} />
      <div className='contact-page'>
        <div className='contact-page-container'>
          <h1 ref={el => (text1 = el)}>
            Let's talk about <br /> the project? <img src={flower} alt='' />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
