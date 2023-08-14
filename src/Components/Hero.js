import React from 'react';

export default function Hero() {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>Explore Miami</h1>
        <p>
          Discover all of the beautiful sights and attraction that the Magic
          City has to offer
        </p>
        <a href='#sights' className='btn hero-btn'>
          explore now
        </a>
      </div>
    </section>
  );
}
