import React from 'react';

const ButtonNav = ({ color, text }) => {
  return (
    <div
      className={`text-lg border-2 rounded-md p-3 ${
        color === 'black'
          ? 'bg-black text-white duration-500 hover:opacity-50 '
          : 'bg-white duration-500 hover:border-black'
      }`}
    >
      {text.toUpperCase()}
    </div>
  );
};

export default ButtonNav;
