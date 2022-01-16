import React, { useEffect, useRef } from 'react';
import { GetInTouch, Navbar } from '..';
import './styles/about.styles.scss';
import gsap from 'gsap';
import flower from '../../assets/flower.svg';

const About = () => {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let image = useRef(null);
  let p1 = useRef(null);
  const timeline_about = gsap.timeline();
  useEffect(() => {
    timeline_about.from(
      [text1, text2],
      {
        duration: 0.8,
        y: 500,
        skewY: 10,
        stagger: {
          amount: 0.4,
        },
      },
      '-=.5',
    );
    timeline_about.from(
      image,
      {
        duration: 1.5,
        y: 300,
        delay: 0.2,
        opacity: 0,
      },
      '-=.5',
    );
    timeline_about.from(p1, {
      duration: 0.5,
      x: 200,
      skewX: 10,
      opacity: 0,
    });
  });
  return (
    <section className='about'>
      <Navbar timeline={timeline_about} />
      <div className='about-container'>
        <div className='container-text'>
          <div className='container-inner-text1'>
            <p ref={el => (text1 = el)}>Mathias</p>
          </div>
          <div className='container-inner-text2'>
            <p ref={el => (text2 = el)}>Kolberg</p>
          </div>
        </div>
        <di
          ref={el => (p1 = el)}
          v
          className='container-quote container-quote1'
        >
          Well-organised <br /> problem solver, independend employee <br />{' '}
          looking for a full time position
        </di>
        <div className='container-quote container-quote2'>
          I specialize in fullstack <br /> JavaScript/React websites <br /> and
          applications
        </div>
        <div className='container-image' ref={el => (image = el)}></div>
      </div>
      <div className='about-container2'>
        <div className='about-container2-heading'>
          <div className='about-text-lower'>
            <p>I build</p>
          </div>
          <div className='about-text-lower'>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;things</p>
          </div>
          <div className='about-text-lower'>
            <p>&nbsp;&nbsp;for the&nbsp;&nbsp; </p>
          </div>
          <div className='about-text-lower'>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; web.</p>
          </div>
        </div>
        <div className='about-container-flower'>
          <img src={flower} alt='' />
        </div>
      </div>
      <GetInTouch />
    </section>
  );
};

export default About;
