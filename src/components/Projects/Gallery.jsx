import React from 'react';
import { websitesData } from '../../data/data';
import arrow from '../../images/arrow.svg';

const Gallery = () => {
  return (
    <>
      {websitesData.map(website => (
        <div className='project-page-item'>
          <a href={website.website} target='_blank' rel='noreferrer'>
            <div className='project-page-item-header'>
              <h1>{website.title}</h1>
            </div>
            <div className='project-page-item-image'>
              <img src={website.mainImg} alt={website.title} />
            </div>
            <div className='project-page-item-footer'>
              <p>Visit site</p>
              <img src={arrow} alt='' />
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Gallery;
