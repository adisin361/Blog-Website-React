import * as React from 'react';
import './style.css';
const Header = () => {
  return (
    <>
      <div className='header'>
        <p className='main-heading'>The Artifact</p>
        <p className='sub-heading'><em>Culture & Art blog</em></p>
        <div className='nav-bar'>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Header;