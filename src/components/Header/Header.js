import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <header>
        <div className='logoArea'></div>
        <div className='navArea'>
          <button>Home</button>
          <button>Product</button>
          <button>Faq</button>
          <button>Contact</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
