import React from 'react';
import './styles/footer.styles.scss';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer-container'>
          <div className='message-for-users'>
            <span>
              Please contact me in any way <br /> you like
            </span>
          </div>
          <div className='social-links'>
            <div className='social-links-h'>Social</div>
            <div className='social-links-items'>
              <a
                href='https://www.instagram.com/mathias_kolberg/'
                target='_blank'
                rel='noreferrer'
              >
                Instagram
              </a>
              <a
                href='https://github.com/MathiasCK'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>

              <a
                href='https://www.linkedin.com/in/mathias-kolberg-094272197/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className='social-links'>
            <div className='social-links-h'>Contact</div>
            <div className='social-links-items'>
              <a
                href='mailto:mathias.ck2000@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                Mail
              </a>

              <a href='tel:004747683559' target='_blank' rel='noreferrer'>
                Phone
              </a>
            </div>
          </div>
          <div className='footer-menu social-links'>
            <div className='footer-menu-h social-links-h'>Other Menu</div>
            <div className='footer-menu-links social-links-items'>
              <p className='footer-menu-links-items'>Home.</p>
              <p className='footer-menu-links-items'>About.</p>
              <p className='footer-menu-links-items'>Projects.</p>
              <p className='footer-menu-links-items'>Contact.</p>
            </div>
          </div>
          <div className='footer-btn'>
            <a href='' className='footer-btn-a'>
              Get Started!
            </a>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='left-footer-bottom'>
            <p>Norway</p>
          </div>
          <div className='right-footer-bottom'>
            <p>2022. Mathias Kolberg. ALL RIGHT RESERVED</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
