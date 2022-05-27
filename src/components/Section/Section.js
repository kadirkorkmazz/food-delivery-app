import React from 'react';
import './Section.css';
import step1photo from '../../img/step1.svg';
import step2photo from '../../img/step2.svg';
import step3photo from '../../img/step3.svg';

function Section() {
  return (
    <div className='section'>
      <h2>How to app works</h2>
      <div className='step1 steps'>
        <img src={step1photo} alt='step1'></img>
        <div className='step1TextArea'>
          <h3>Create an account</h3>
          <h2>Create/login to an existing account to get started</h2>
          <h4>An account is created with your email and a desired password</h4>
        </div>
      </div>
      <div className='step2 steps'>
        <div className='step2TextArea'>
          <h3>Explore varieties</h3>
          <h2>Shop for your favorites meal as e dey hot.</h2>
          <h4>
            Shop for your favorite meals or drinks and enjoy while doing it.
          </h4>
        </div>
        <img src={step2photo} alt='step2'></img>
      </div>
      <div className='step3 steps'>
        <img src={step3photo} alt='step3'></img>
        <div className='step3TextArea'>
          <h3>Checkout</h3>
          <h2>When you done check out and get it delivered.</h2>
          <h4>When you done check out and get it delivered with ease.</h4>
        </div>
      </div>
    </div>
  );
}

export default Section;
