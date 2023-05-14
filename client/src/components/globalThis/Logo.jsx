// Modules
import React from 'react';
import { useNavigate } from 'react-router-dom';

// CSS
import './Logo.css';

/**
 * Page logo component that goes to homepage on click
 */
const Logo = () => {
  
  const navigate = useNavigate();

  // On logo click navigate to homepage
  const handleClick = () => {
    navigate('/')
  }

  return (
    <button to="/" className='logo' onClick={() => handleClick()}>

      {/* Logo SVG */}
    <img src ="https://www.arvrtise.com/wp-content/uploads/2023/05/fundfi32.png"/>

      {/* Logo name */}
      <p className='text'>
        FUND<span>Fi</span> LUV NFT
      </p>

    </button>
  );
};

export default Logo;
