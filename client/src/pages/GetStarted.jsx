// Modules
import React from 'react';

// Images
import tut0 from '../assets/img/tut0.jpg';
import tut1 from '../assets/img/tut1.jpg';
import tut2 from '../assets/img/tut2.jpg';

// CSS
import './GetStarted.css';

/**
 * Page for beginnert to get started
 */
const GetStarted = () => {
  return (
    <div className='get-started'>
      <svg className='thing' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.06 122.88">
        <defs>  
          <linearGradient id="logo-gradient" x1="0%" y1="50%" x2="100%" y2="50%" > 
            <stop offset="0%" stopColor="#40916C">
              <animate attributeName="stcolorop-" values="#40916C; #B7E4C7; #40916C" dur="1s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="100%" stopColor="#B7E4C7">
              <animate attributeName="stop-color" values="#B7E4C7; #40916C; #B7E4C7" dur="1s" repeatCount="indefinite"></animate>
            </stop>
          </linearGradient> 
        </defs>
        <path d="M34.43 47.86L52.8 37.6V18.31a9.233 9.233 0 01-5.46-3.16L17.91 32.18c.35.98.54 2.03.54 3.13 0 .92-.13 1.8-.38 2.64l16.36 9.91zm11.35-35.38a9.231 9.231 0 01-.59-3.25c0-2.55 1.03-4.86 2.7-6.53S51.87 0 54.42 0c2.55 0 4.86 1.03 6.53 2.7a9.205 9.205 0 012.7 6.53c0 1.12-.2 2.19-.56 3.18l29.57 17.1c.21-.25.42-.5.65-.73a9.205 9.205 0 016.53-2.7c2.55 0 4.86 1.03 6.53 2.7a9.205 9.205 0 012.7 6.53c0 2.55-1.03 4.85-2.7 6.52a9.194 9.194 0 01-5.32 2.62v33.91c2.07.27 3.92 1.22 5.32 2.62 1.67 1.67 2.7 3.98 2.7 6.52a9.222 9.222 0 01-9.23 9.23 9.205 9.205 0 01-7.15-3.39l-29.61 17.12c.36.99.56 2.06.56 3.18 0 2.55-1.03 4.86-2.7 6.53a9.205 9.205 0 01-6.53 2.7c-2.55 0-4.86-1.03-6.53-2.7s-2.7-3.98-2.7-6.53c0-1.14.21-2.24.59-3.25L16.35 93.38a9.205 9.205 0 01-7.13 3.36c-2.55 0-4.86-1.03-6.53-2.7C1.03 92.37 0 90.06 0 87.51s1.03-4.85 2.7-6.52a9.242 9.242 0 015.25-2.62V44.44a9.18 9.18 0 01-5.25-2.62A9.164 9.164 0 010 35.3c0-2.55 1.03-4.86 2.7-6.53a9.205 9.205 0 016.53-2.7 9.205 9.205 0 017.16 3.4l29.39-16.99zm15.76 2.61a9.192 9.192 0 01-5.55 3.23V37.6l18.33 10.62 16.85-9.74c-.37-.99-.56-2.07-.56-3.18 0-1.08.19-2.13.53-3.09l-29.6-17.12zm36.69 29.3a9.159 9.159 0 01-4.92-2.56c-.19-.19-.37-.38-.54-.59l-16.82 9.72v20.78l16.89 9.75c.15-.17.3-.34.46-.5a9.194 9.194 0 014.92-2.56V44.39h.01zm-7.07 46.27c-.36-.98-.55-2.04-.55-3.14 0-1.16.21-2.27.61-3.3l-16.34-9.43-18.89 10.98v18.79a9.192 9.192 0 015.55 3.23l29.62-17.13zm-43.82 17.06a9.233 9.233 0 015.46-3.16V85.68l-18.96-11-16.09 9.29c.45 1.09.71 2.29.71 3.55 0 1.12-.2 2.19-.56 3.18l29.44 17.02zM10.76 78.41c1.93.32 3.66 1.25 4.99 2.58.1.1.19.2.28.3l16.39-9.46V50.36L16.64 40.8c-.27.37-.57.71-.89 1.03a9.255 9.255 0 01-4.99 2.58v34zM9.24 41.34c.04 0 .08-.01.12-.01h.08a6 6 0 004.06-1.76 6.023 6.023 0 001.77-4.27c0-1.67-.68-3.18-1.77-4.27-1.09-1.09-2.6-1.77-4.27-1.77s-3.18.68-4.27 1.77a6.023 6.023 0 00-1.77 4.27c0 1.67.68 3.18 1.77 4.27a6.03 6.03 0 004.28 1.77zm49.44 68.05a6.023 6.023 0 00-4.27-1.77c-1.67 0-3.18.68-4.27 1.77-1.09 1.09-1.77 2.6-1.77 4.27s.68 3.18 1.77 4.27 2.6 1.77 4.27 1.77c1.67 0 3.18-.68 4.27-1.77 1.09-1.09 1.77-2.6 1.77-4.27s-.67-3.18-1.77-4.27zm0-104.43a6.023 6.023 0 00-4.27-1.77c-1.67 0-3.18.68-4.27 1.77s-1.77 2.6-1.77 4.27c0 1.67.68 3.18 1.77 4.27a6.023 6.023 0 004.27 1.77c1.67 0 3.18-.68 4.27-1.77a6.023 6.023 0 001.77-4.27c0-1.67-.67-3.18-1.77-4.27zm45.42 78.29a6.023 6.023 0 00-4.27-1.77c-1.67 0-3.18.68-4.27 1.77a6.023 6.023 0 00-1.77 4.27c0 1.67.68 3.18 1.77 4.27a6.023 6.023 0 004.27 1.77c1.67 0 3.18-.68 4.27-1.77a6.023 6.023 0 001.77-4.27c0-1.67-.67-3.18-1.77-4.27zm-90.6 0c-1.09-1.09-2.6-1.77-4.27-1.77s-3.18.68-4.27 1.77a6.023 6.023 0 00-1.77 4.27c0 1.67.68 3.18 1.77 4.27s2.6 1.77 4.27 1.77 3.18-.68 4.27-1.77a6.023 6.023 0 001.77-4.27 6.065 6.065 0 00-1.77-4.27zm80.95-45.22c.08.08.14.18.2.28.06.1.1.2.14.31.23.34.49.66.77.95a6.023 6.023 0 004.27 1.77c1.67 0 3.18-.68 4.27-1.77a6.023 6.023 0 001.77-4.27c0-1.67-.68-3.18-1.77-4.27a6.023 6.023 0 00-4.27-1.77c-1.67 0-3.18.68-4.27 1.77a6.023 6.023 0 00-1.77 4.27c.01.99.25 1.91.66 2.73zM35.41 71.49a1.687 1.687 0 01.43.88l17.13 10.07V62.56L35.41 52.11v19.38zm37.56-19.11L55.96 62.57v19.89l17.01-10.05V52.38zM54.39 39.99l-16.6 9.93 16.69 10.05 16.21-9.84-16.3-10.14z" fillRule="evenodd" clipRule="evenodd" fill="url('#logo-gradient')"/>
      </svg>

      <p className='title'>How FundFi works</p>
      <div className='section'>
        <p className='number'>1</p>
        <div className='content'>
          <p className='title'>Someone creates a project</p>
          <p className='text'>Anyone with a MetaMask account can create a project.</p>
        </div>
      </div>
      <div className='section'>
        <p className='number'>2</p>
        <div className='content'>
          <p className='title'>People donate</p>
          <p className='text'>If people like the project they might donate to it.</p>
        </div>
      </div>
      <div className='section'>
        <p className='number'>3</p>
        <div className='content'>
          <p className='title'>Payout</p>
          <p className='text'>When the deadline is reached the crypto is payed out to the project creator.</p>
        </div>
      </div>

      <div className='devider'></div>

      <p className='title'>Connecting FundFi to MetaMask</p>
      <div className='section'>
        <p className='number'>1</p>
        <div className='content'>
          <p className='title'>Create MetaMask wallet</p>
          <p className='text'>Go to the <a href='https://metamask.io/' target="_blank">MetaMask Website</a> and create a wallet</p>
        </div>
      </div>
      <div className='section'>
        <p className='number'>2</p>
        <div className='content'>
          <p className='title'>Go back to the FundFi LUV NFT website</p>
          <p className='text'></p>
        </div>
      </div>
      <div className='section'>
        <p className='number'>3</p>
        <div className='content'>
          <p className='title'>Press "Connect to MetaMask"</p>
          <img className='image' src={tut0} alt="" />
        </div>
      </div>
      <div className='section'>
        <p className='number'>4</p>
        <div className='content'>
          <p className='title'>Press "Next"</p>
          <img className='image' src={tut1} alt="" />
        </div>
      </div>
      <div className='section'>
        <p className='number'>5</p>
        <div className='content'>
          <p className='title'>Press "Connect"</p>
          <img className='image' src={tut2} alt="" />
        </div>
      </div>
      <div className='section'>
        <p className='number'>6</p>
        <div className='content'>
          <p className='title'>Finished</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
