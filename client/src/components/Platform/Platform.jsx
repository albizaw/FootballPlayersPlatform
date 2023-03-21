import React, { useEffect, useState } from 'react';
import API from '../../api/apidata.js';
import { api } from '../../api/axios';

const Platform = () => {
  // player name
  const [data, setData] = useState([]);

  const [playerName, setPlayerName] = useState('');
  const footballerHandler = (e) => {
    setPlayerName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
    }
  };

  // useEffect(() => {
  //   api
  //     .get(`/players?api_token=${API.API_KEY}`)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  //request HTTP

  return (
    <div className="flex w-full flex-col items-center justify-start h-[calc(100vh-80px)] text-center p-10 bg-slate-100">
      <div className="max-w-screen-md w-full flex flex-col items-center justify-start md:gap-14 gap-6">
        <div className="w-full flex flex-col items-center justify-center  h-full  ">
          <span className="py-2 text-xl w-2/3 text-center text-gray-400 font-bold italic ">
            {' '}
            Type footballer name{' '}
          </span>
          <input
            onChange={footballerHandler}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Name"
            className="border-2 border-gray-100 p-5 rounded-xl w-3/4 shadow-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="max-w-screen-2xl w-full h-full mt-10 md:border-4 p-4 md:rounded-xl border-gray-200"></div>
    </div>
  );
};

export default Platform;
