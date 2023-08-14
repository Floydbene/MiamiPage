import React from 'react';

const Sight = ({ icon, title, subText }) => {
  return (
    <article className='sight'>
      <span className='sight-icon'>
        <i className={icon}></i>
      </span>
      <div className='sight-info'>
        <h4 className='sight-title'>{title}</h4>
        <p className='sight-text'>{subText}</p>
      </div>
    </article>
  );
};

export default Sight;
