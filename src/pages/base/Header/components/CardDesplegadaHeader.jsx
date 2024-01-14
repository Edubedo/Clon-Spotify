import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

function CardDesplegadaHeader() {
  return (
    <div className="absolute w-[8rem] ml-0 bg-[#303030] border border-gray-500 border-spacing-1 p-1  text-white text-[13px] rounded-[3px] mt-[12rem]">
      <div className="flex justify-between hover:bg-[#4b4b4b] cursor-default pl-6">
        <span>File</span>
        <FaCaretRight />
      </div>
      <div className="flex justify-between hover:bg-[#4b4b4b] cursor-default pl-6">
        <span>Edit</span>
        <FaCaretRight />
      </div>
      <div className="flex justify-between hover:bg-[#4b4b4b] cursor-default pl-6">
        <span>View</span>
        <FaCaretRight />
      </div>
      <div className="flex justify-between hover:bg-[#4b4b4b] cursor-default pl-6">
        <span>Playback</span>
        <FaCaretRight />
      </div>
      <div className="flex justify-between hover:bg-[#4b4b4b] cursor-default pl-6">
        <span>Help</span>
        <FaCaretRight />
      </div>
    </div>
  );
}

export default CardDesplegadaHeader;
