import React from 'react';

const Card = ({ player }) => {
  return (
    <div
      key={player.id}
      className="flex flex-col justify-center items-center mx-auto md:w-full lg:w-4/5 sm:w-full  w-4/5 h-[250px] sm:h-[250px] md:h-[250px] border-4 border-gray-100 hover:border-yellow-400 shadow-xl rounded-2xl duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="w-full h-1/3 flex justify-between items-center p-4 bg-slate-200 rounded-t-2xl">
        {/* up */}
        <div className="font-normal md:text-2xl text-xl italic">
          {player.common_name}
        </div>

        <div className="font-light text-xl italic">{player.date_of_birth}</div>
      </div>

      <div className="h-2/3 w-full flex justify-between items-center p-4 bg-white rounded-b-2xl">
        {/* down */}

        <div>
          <img
            src={player.image_path}
            className="border-4 border-gray-100 md:w-[140px] w-[110px] rounded-full shadow-xl"
          />
        </div>

        <div className="flex flex-col items-center text-lg italic font-medium justify-center gap-3">
          <p>Weight: {player.weight} kg</p>
          <p>Height: {player.height} cm</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
