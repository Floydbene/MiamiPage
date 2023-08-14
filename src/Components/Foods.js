import React from 'react';
import Title from './Title';
import Feature from './Feature';

import { features } from '../data';

export default function Foods() {
  return (
    <section className='section' id='foods'>
      <Title title={'featured'} subTitle={'spots'}></Title>

      <div className='section-center featured-center'>
        {features.map((feature) => {
          const { location, inf1, inf2, title, subText, catcher, img, id } =
            feature;
          return (
            <Feature
              key={id}
              location={location}
              inf1={inf1}
              inf2={inf2}
              title={title}
              subText={subText}
              catcher={catcher}
              img={img}
            ></Feature>
          );
        })}
      </div>
    </section>
  );
}
