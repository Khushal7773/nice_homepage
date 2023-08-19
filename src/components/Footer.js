import React from 'react';
import '../App.css';
import Logo from '../assets/logo.png';
import Ahead from '../assets/Ahead.png';
import Location from '../assets/Location.png';
import Message from '../assets/Message.png';
import Appstore from '../assets/Appstore_Logo.png';

function Footer() {
    return (
        <footer className=" bg-white text-black py-6">
          <div className='flex justify-center'>
          <img src={Logo} alt='Logo' className='rounded-lg' />
          </div>
          <div className='flex justify-center'>
          <img src={Ahead} alt='Ahead' className='rounded-lg my-2' />
          </div>
          <div className='flex justify-center my-2'>
            <span className='flex justify-normal mx-8'>
            <img src={Location} alt='Location' className='h-6' />
            <p className='mx-2 text-sm' >Auguststraβe 26, 10117 Berlin</p>
            </span>
            <span className='flex justify-normal mx-8'>
            <img src={Message} alt='Message' className='h-6' />
            <p className='mx-2 text-sm'>hi@ahead-app.com</p>
            </span>
          </div>
          <div className='flex justify-center'>
          <img src={Appstore} alt='Appstore' className='rounded-xl my-2' />
          </div>
        <div className="container mx-auto text-center text-sm">

          &copy; 2022 Ahaed app. All right reserved
        </div>
      </footer>
    )
};

export default Footer;