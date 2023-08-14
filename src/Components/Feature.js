import React from 'react';

const Feature = ({ location, inf1, inf2, title, subText, catcher, img }) => {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={img} className='tour-img' alt='' />
        <p className='tour-date'>{catcher}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{subText}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>{' '}
            {location}
          </p>
          <p>{inf1}</p>
          <p>{inf2}</p>
        </div>
      </div>
    </article>
  );
};

export default Feature;
