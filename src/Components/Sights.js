import React from 'react';
import Title from './Title';
import Sight from './Sight';
import { sights } from '../data';

export default function Sights() {
  return (
    <section className='section sights' id='sights'>
      <Title title={'Things to'} subTitle={'see'}></Title>
      <div className='section-center sights-center'>
        {sights.map((sight) => {
          const { id } = sight;
          return <Sight key={id} {...sight}></Sight>;
        })}
      </div>
    </section>
  );
}
