import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
  
        <img
          src={Logo} 
          alt="Logo"
          className='rounded-lg'
          
        />

        
        <nav>
          <ul className="flex space-x-4">
            <li className='mx-6'><a href="#">Emotions</a></li>
            <li className='mx-6'><a href="#">Manifesto</a></li>
            <li className='mx-6'><a href="#">Self-awareness test</a></li>
            <li className='mx-6'><a href="#">Work With Us</a></li>
          </ul>
        </nav>

  
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
          Download app
        </button>
      </div>
    </header>
  );
};

export default Header;
