import React from 'react';
import aboutImg from '../images/about.png';
import Title from './Title';

export default function About() {
  return (
    <section className='section' id='about'>
      <Title title={'Check out Miami'} subTitle={'now'}></Title>
      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>Explore Miami</h3>
          <p>
            This website is an example of web design and development, made with
            the purpose of showing some basic skills and hopefully inspiring
            some ideas for future web projects.
          </p>
          <p>
            The star of the site is the Beuatiful city of Miami, as I am
            currently working out of here and exploring he beautiful
            attractions. Scroll down to see more about Miami!
          </p>
          <a href='#sights' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
