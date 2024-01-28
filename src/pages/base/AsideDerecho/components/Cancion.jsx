import React from 'react';
import imgTheDoors from '../../../../assets/images/album/theDoors2.jpg';
import { IoMdClose } from 'react-icons/io';
function Cancion() {
  return (
    <div className="p-4">
      <div className='flex items-center justify-between p-1'>
        <h4 className="font-semibold text-[20px]">The doors - Exitos</h4>
        <IoMdClose  className='m-1 cursor-pointer text-gray-300 hover:bg-gray-400 rounded-[50%]'/>
      </div>
      <img
        src={imgTheDoors}
        alt="Img album the doors"
        className="rounded-[5px]"
      />
    </div>
  );
}

export default Cancion;
