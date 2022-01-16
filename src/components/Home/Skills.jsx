import React from 'react';
import { skillsData } from '../../data/data';

const Skills = () => {
  return (
    <section className='skill-set-boxes'>
      {skillsData.map(skill => (
        <div className='skill-set-box'>
          <h1 className='skill-set-box-h1'>{skill.name}</h1>
          <p className='skill-set-box-p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            suscipit.
          </p>
          <p>___</p>
        </div>
      ))}
    </section>
  );
};

export default Skills;
