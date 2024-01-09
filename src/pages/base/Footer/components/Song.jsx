import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import LogoAlbumTheDoors from '../../../../assets/images/album/theDoors2.jpg';

function Song() {
  const [like, setLike] = useState(false); // Estado para el botón de like

  const cancionTheDoors = {
    img: LogoAlbumTheDoors,
    name: 'Light my fire',
    band: 'The doors',
    duration: 3.29,
    like: like // Usar el estado local para manejar el like/dislike
  };

  return (
    <div className="flex">
      <img
        src={cancionTheDoors.img}
        alt="Album the doors"
        width={60}
        height={20}
        className="rounded-[4px]"
      />
      <div className="items-center mt-1 ml-5">
        <div className="flex items-center ">
          <div className="items-center overflow-hidden">
            <h4 className="text-[15px] ">{cancionTheDoors.name}</h4>
            <p className="text-[13px] text-gray-400">{cancionTheDoors.band}</p>
          </div>
          <div>
            {cancionTheDoors.like ? (
              <button
                onClick={() => {
                  setLike(false); // Actualizar el estado de like a false
                  console.log('dislike');
                }}
              >
                <FaCheckCircle className="text-green-400 text-[18px] ml-6 cursor-pointer" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setLike(true); // Actualizar el estado de like a true
                }}
              >
                <IoMdAddCircleOutline className="text-[21px] ml-6 cursor-pointer" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Song;
