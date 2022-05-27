import React from 'react';
import './Footer.css';

import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <div>
      <footer>
        <div className='footerLogo'></div>
        <div className='social'>
          <a href='https://github.com/kadirkorkmazz/'>
            <AiFillGithub className='icons' size={39} />
          </a>
          <a href='https://www.linkedin.com/in/kadirkorkmazz/'>
            <AiFillLinkedin className='icons' size={39} />
          </a>
          <a href='##'>
            <AiOutlineTwitter className='icons' size={39} />
          </a>
        </div>
        <div className='copyright'>Copyright 2022 Kadir Korkmaz</div>
      </footer>
    </div>
  );
}

export default Footer;
