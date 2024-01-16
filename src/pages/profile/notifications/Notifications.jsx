import React from 'react';
import BotonesHeader from '../../dashboard/BotonesHeader';

function Notifications() {
  return (
    <div className="bg-[#121212] text-white p-5">
      <BotonesHeader />
      <h1 className="text-[2.4rem] font-bold">What's New</h1>
      <p className="mb-3 text-gray-400">
        The latest releases from artist, podcasts, and show you follow
      </p>
      <div className='flex gap-3 '>
        <button className="p-2 bg-[#232323]  rounded-r-[20px] rounded-l-[20px]">
          Music
        </button>
        <button className="p-2 bg-[#232323]  rounded-r-[20px] rounded-l-[20px]">
          Podcast & Shows
        </button>
      </div>
    </div>
  );
}

export default Notifications;
