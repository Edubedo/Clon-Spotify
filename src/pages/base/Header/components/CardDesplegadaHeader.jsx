import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

function CardDesplegadaHeader() {
  return (
    <div className="absolute w-[5rem] ml-0 bg-[#303030] border border-white border-spacing-1 p-1  text-white text-[13px] rounded-[10px]">
      <div className="flex justify-between hover:bg-[#4b4b4b] cursor-default">
        <span>File</span>
        <FaCaretRight />
      </div>
      <div className="flex justify-between hover:bg-[#4b4b4b] cursor-default">
        <span>Edit</span>
        <FaCaretRight />
      </div>
      <div className="flex justify-between hover:bg-[#4b4b4b] cursor-default">
        <span>View</span>
        <FaCaretRight />
      </div>
      <div className="flex justify-between hover:bg-[#4b4b4b] cursor-default">
        <span>Playback</span>
        <FaCaretRight />
      </div>
      <div className="flex justify-between hover:bg-[#4b4b4b] cursor-default">
        <span>Help</span>
        <FaCaretRight />
      </div>
    </div>
  );
}

export default CardDesplegadaHeader;
