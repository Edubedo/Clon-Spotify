import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Notification({
  img,
  alt,
  title,
  artist,
  description,
  type,
  uploadDate,
  duration,
  route
}) {
  return (
    <Link to={route}>
      <div className="mb-10">
        <div className="flex flex-col h-full gap-2 sm:flex-row ">
          <img className="w-[90%] sm:w-[30%] h-[10rem] xl:h-[12rem]" src={img} alt={alt} />
          <div className="items-center h-full">
            <h4 className="text-[1.3rem]">{title}</h4>
            <h5 className="text-[1.20rem] text-[#939393] font-semibold">
              {artist}
            </h5>
          </div>
        </div>
        <p className="text-[1.2rem] text-[#939393] font-semibold mt-2">
          {description}
        </p>
        <div className="text-[1.13rem] my-2">
          <span>{type}</span>
          <span> - </span>
          <span>{uploadDate}</span>
          <span> - </span>
          <span>{duration}</span>
        </div>
        <div className='mt-3'>
          <div className="flex justify-between ">
            <IoMdAddCircleOutline className="text-2xl" />
            <FaPlayCircle className="text-3xl" />
          </div>
        </div>
        <br />
        <div className='h-[1px] bg-gray-100 opacity-40'></div>
      </div>
    </Link>
  );
}

export default Notification;
