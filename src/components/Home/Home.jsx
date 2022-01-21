import React, { useEffect, useRef } from 'react';
import './styles/home.styles.scss';
import { Navbar } from '../../components';

import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Carousel from './Carousel';
import Skills from './Skills';
import ShortAbout from './ShortAbout';

const Home = () => {
  const homeRef = useRef(null);

  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let text5 = useRef(null);
  let p1 = useRef(null);

  const timeline_home = gsap.timeline();
  useEffect(() => {
    timeline_home.from(
      [text1, text2, text3, text4, text5],
      {
        duration: 1,
        skewY: 15,
        y: 400,
        stagger: {
          amount: 0.2,
        },
      },
      '-=1.2',
    );
    timeline_home.from(p1, {
      duration: 0.6,
      x: -100,
      delay: 0.2,
      opacity: 0,
    });
  });

  return (
    <section className='home' ref={homeRef}>
      <Navbar timeline={timeline_home} />
      {/* <Introduction
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        text5={text5}
        p1={p1}
      /> */}
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
          I am an up and coming full-stack developer, <br />
          with a passion for developing clever solutions <br />
          currently living in Oslo. I started out as a <br />
          hobby programmer at the age of 15 and have ever <br />
          since pursued my dream of one day working as a software developer{' '}
          <br />
          full time.
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
      <div className='flower-svg'>
        <img src='../../assets/flower.svg' alt='' />
      </div>
      <ShortAbout />
      <div className='my-skills-main-reel'>
        <Carousel />
        <Skills />
        <div className='project-and-work'>
          <h1>
            <Link className='h1-project' to='/projects'>
              My Projects and Works <img src='../../assets/arrow.svg' alt='' />
            </Link>
          </h1>
          <br />
          <p>Click me!</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
