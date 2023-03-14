import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/profile.png';
import convertToBase64 from '../helper/convert.js';

const Register = () => {
  const [file, setFile] = useState('');
  const navigate = useNavigate();

  const fileHandler = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="bg-slate-100 flex w-full h-[calc(100vh-80px)] justify-center items-center mx-auto">
      <div className="max-w-xl flex justify-center items-center md:h-5/6 md:w-5/6 w-full h-full md:border-4 p-4 md:rounded-xl bg-gray-100">
        <div className="w-[80%] h-5/6 border-gray-200">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-400">
              Happy to join us!
            </span>
          </div>

          {/* form */}
          <form className="py-1">
            <div className="flex flex-col justify-center py-4">
              <label htmlFor="avatar">
                <img
                  src={file || avatar}
                  alt="Profile photo"
                  className="mx-auto border-4 border-gray-100 w-[135px] rounded-full shadow-xl cursor-pointer hover:border-gray-200"
                />
              </label>
              <input
                onChange={fileHandler}
                id="avatar"
                type="file"
                className="hidden"
              />
              <div className="flex justify-center items-align text-gray-400 py-1">
                <p>click photo</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-5 py-3">
              <input
                type="text"
                placeholder="username"
                className="border-2 border-gray-100 p-5 rounded-xl w-3/4 shadow-sm focus:outline-none"
              />

              <input
                type="password"
                placeholder="password"
                className="border-2 border-gray-100 p-5 rounded-xl w-3/4 shadow-sm focus:outline-none"
              />

              <button
                type="submit"
                className="text-lg border-2 w-3/4 rounded-xl p-5 bg-black text-white duration-500 hover:opacity-50"
              >
                Sign Up
              </button>
            </div>

            <div className="py-4 text-center">
              <span className="text-gray-500">
                Already register?{' '}
                <Link to="/signin" className="text-red-500 font-normal">
                  Login now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
