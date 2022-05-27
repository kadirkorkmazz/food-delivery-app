import React from 'react';
import './Hero.css';
import phone2 from '../../img/phone2.svg';
import phone1 from '../../img/phone1.svg';

function Hero() {
  return (
    <div>
      <div className='hero'>
        <h4>Food app</h4>
        <h1>
          Why stay hungry when <br></br> you can order form Bella Onojie
        </h1>
        <h4 className='heroH4'>Download the bella onoje’s food app now on</h4>
        <div className='hero-button-area'>
          <button className='playstoreButton'>Playstore</button>
          <button className='appstoreButton'>App store</button>
        </div>
      </div>
      <div className='phonePhotos'>
        <img src={phone1} alt='mobile app 1'></img>
        <img src={phone2} alt='mobile app 2'></img>
      </div>
      <hr></hr>
    </div>
  );
}

export default Hero;
