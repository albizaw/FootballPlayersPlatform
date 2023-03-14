import React, { useState } from 'react';
import logo from '../assets/logo.png';
import ButtonNav from './ButtonNav';
import { Link } from 'react-router-dom';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const links = [
    {
      link: '/signin',
      text: 'Sign In',
      color: 'white',
    },
    {
      link: '/signup',
      text: 'Join',
      color: 'black',
    },
  ];

  // handling setNav
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="w-full mx-auto h-20 bg-slate-50 flex items-center justify-between max-w-screen-lg z-20 px-8">
        <Link to="/">
          <div className="flex items-center gap-1">
            <p className="text-2xl font-bold">FOOTBALL</p>
            <img src={logo} alt="logo" className="w-10 h-10 object-cover" />
          </div>
        </Link>

        <div className="gap-3 hidden md:flex">
          {links.map(({ link, text, color }) => (
            <Link to={link}>
              <ButtonNav text={text} color={color} />
            </Link>
          ))}
        </div>

        <div onClick={handleNav} className="md:hidden">
          {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </div>

      <div
        className={`w-full bg-slate-400 text-black absolute z-10 left-0 h-fit py-10 md:hidden flex flex-col justify-center text-center duration-500 ${
          nav ? 'top-20 rounded-b-2xl opacity-90 text-2xl gap-4' : 'top-[-100%]'
        }`}
      >
        {links.map(({ link, text, color }) => (
          <Link
            onClick={handleNav}
            className={`w-1/2 flex items-center mx-auto justify-center p-4 border-2 rounded-md ${
              color === 'black'
                ? 'bg-black text-white duration-500 hover:opacity-50 '
                : 'bg-white duration-500 hover:border-black'
            }`}
            to={link}
          >
            {text}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
