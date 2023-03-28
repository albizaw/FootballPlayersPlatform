import React, { useEffect, useState } from 'react';
import API from '../../api/apidata.js';
import axios, { api } from '../../api/axios';
import Card from '../Card.jsx';

const Platform = () => {
  // player name
  const [players, setPlayers] = useState([]);

  const [playerName, setPlayerName] = useState('');

  const footballerHandler = (e) => {
    setPlayerName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      //console.log(e.target.value);
    }
  };

  useEffect(() => {
    axios
      .get('/platform/allPlayers')
      .then((response) => {
        const data = response.data;
        setPlayers(data.data);
        console.log(players[0]);
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
          <span className="py-2 text-xl w-2/3 text-center text-gray-400 font-extralight font-sans italic ">
            {' '}
            Type footballer name{' '}
          </span>
          <input
            onChange={footballerHandler}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Name"
            className="border-2 border-gray-100 text-xl p-5 rounded-xl w-3/4 shadow-sm focus:outline-none"
          />
        </div>
      </div>

      {players.filter((player) =>
        player.name.toLowerCase().includes(playerName.toLowerCase())
      ).length === 0 ? (
        <div className="max-w-screen-lg w-full h-full flex justify-center items-center p-10 m-10">
          <h1 className="md:text-5xl text-2xl font-light italic">
            Not found any players
          </h1>
        </div>
      ) : (
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 scrollable-div max-w-screen-2xl lg:gap-4 gap-5 w-full h-full md:mt-10 mt-2  md:p-2 p-4  overflow-y-scroll">
          {players
            .filter((player) => {
              return playerName.toLowerCase() === ''
                ? player
                : player.name.toLowerCase().includes(playerName);
            })
            .map((player) => (
              <Card player={player} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Platform;
