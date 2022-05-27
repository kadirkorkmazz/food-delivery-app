import React from 'react';
import './DownloadAppSection.css';

function DownloadAppSection() {
  return (
    <div className='downloadAppSection'>
      <div className='textArea'>
        <h2>Download the app now.</h2>
        <h4>
          Available on your favorite store. Start your premium experience now
        </h4>
      </div>
      <div className='buttonsArea'>
        <button> Playstore</button>
        <button> App store</button>
      </div>
    </div>
  );
}

export default DownloadAppSection;
