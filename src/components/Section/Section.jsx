import React from 'react';



const Section = ({ title, children }) => (
  <div className='section'>
    <h1 className='section-title'>{title}</h1>
    {children}
  </div>
);

export default Section;