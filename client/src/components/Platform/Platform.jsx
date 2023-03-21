import React, { useEffect, useState } from 'react';
import API from '../../api/apidata.js';
import axios, { api } from '../../api/axios';

const Platform = () => {
  // player name
  const [players, setPlayers] = useState([]);

  const [playerName, setPlayerName] = useState('');
  const footballerHandler = (e) => {
    setPlayerName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
    }
  };

  useEffect(() => {
    axios
      .get('/platform/allPlayers')
      .then((response) => {
        const data = response.data;
        setPlayers(data.data);
        //console.log(players[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

      <div className="grid md:grid-cols-2 scrollable-div max-w-screen-2xl md:gap-20 gap-10 w-full h-full md:mt-10 mt-2 md:border-4 md:p-10 p-6 md:rounded-xl border-gray-200  overflow-y-scroll">
        {players.map((player) => (
          <div
            key={player.id}
            className="flex flex-col justify-center items-center mx-auto md:w-4/5 w-full md:h-[350px] h-[150px] w- border-2 border-black"
          >
            <div className="w-full h-1/3 flex justify-between items-center p-4 bg-slate-200">
              {/* up */}
              <div className="font-normal md:text-3xl text-xl italic">
                {player.common_name}
              </div>

              <div className="font-light text-sm italic">
                {player.date_of_birth}
              </div>
            </div>

            <div className="h-2/3">
              {/* down */}
              tez cos
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platform;
