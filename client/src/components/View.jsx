import React from 'react';
import Typical from 'react-typical';

const View = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center w-full h-[calc(100vh-80px)] text-center  bg-slate-100">
      <div className="max-w-screen-lg flex flex-col items-center justify-center md:gap-14 gap-6">
        <h1 className="md:text-7xl text-4xl font-normal italic leading-normal ">
          "There is no pressure
          <br /> when you are making a dream come true"
        </h1>

        <h2 className="md:text-4xl text-2xl font-light italic">
          <Typical
            steps={['', 2000, 'Neymar Jr', 1000]}
            loop={Infinity}
            wrapper="a"
          />
        </h2>
      </div>
    </div>
  );
};

export default View;
