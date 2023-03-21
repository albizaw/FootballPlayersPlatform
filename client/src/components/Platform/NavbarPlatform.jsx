import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import ButtonNav from '../ButtonNav';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../assets/profile.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import axios from '../../api/axios';

const NavbarPlatform = ({ file, username }) => {
  const navigate = useNavigate();

  const links = [
    {
      link: '/',
      text: 'Log Out',
      color: 'black',
    },
  ];

  // handling setNav
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = async () => {
    try {
      await axios.get('/auth/logout');
      navigate('/');
      handleNav();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full mx-auto h-20 bg-slate-50 flex items-center justify-between z-20 px-8 border-b border-gray-300">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto w-full">
          <Link to="/">
            <div className="flex items-center gap-1">
              <p className="text-2xl font-bold">FOOTBALL</p>
              <img src={logo} alt="logo" className="w-10 h-10 object-cover" />
            </div>
          </Link>

          <p className="md:font-normal md:block hidden">
            You are logged in as:{' '}
            <span className="text-lg font-bold">{`${username}`}</span>
          </p>
          <div className="gap-5 hidden md:flex items-center">
            <img
              src={file || avatar}
              alt="avatar"
              className="mx-auto border-4 border-gray-100 w-[60px] rounded-full shadow-xl cursor-pointer hover:border-gray-200"
            />
            {links.map(({ link, text, color, i }) => (
              <Link onClick={handleLogout} key={i} to={link}>
                <ButtonNav text={text} color={color} />
              </Link>
            ))}
          </div>

          <div onClick={handleNav} className="md:hidden">
            {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-slate-200 text-black absolute z-10 left-0 h-fit py-10 md:hidden flex flex-col justify-center text-center duration-500 ${
          nav ? 'top-20 rounded-b-2xl  text-2xl gap-4' : 'top-[-100%]'
        }`}
      >
        {links.map(({ link, text, color, i }) => (
          <Link
            key={i}
            onClick={handleLogout}
            className={`w-1/2 flex items-center mx-auto justify-center p-4 border-2 text-xl rounded-md font-bold ${
              color === 'black'
                ? 'bg-black text-white duration-500 hover:opacity-50 '
                : 'bg-white duration-500 hover:border-black'
            }`}
            to={link}
          >
            {text.toUpperCase()}
          </Link>
        ))}
        <img
          src={file || avatar}
          alt="avatar"
          className="mx-auto border-4 border-gray-100 w-[45px] rounded-full shadow-xl cursor-pointer hover:border-gray-200"
        />
      </div>
    </>
  );
};

export default NavbarPlatform;
