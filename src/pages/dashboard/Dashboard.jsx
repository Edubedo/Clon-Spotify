import React from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdGroups } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div className="w-[100%] h-[60vh] p-4 bg-[#1F1154]">
      <BotonesHeader />
      <h1 className="text-5xl font-bold text-white">Good Afternoon</h1>
      <div className="grid grid-cols-2 gap-6">
        {/* Likes */}
        <CardPersonalizada  image={""} alt={"Likes"} name={"Likes"} tipo={""} route={"/profile/likes"}/>
       {/* Artista */}
        <CardPersonalizada  image={""} alt={"Gustavo Cerati"} name={"Gustavo Cerati"} tipo={"Mix"} route={"/dashboard/playlist"}/>
       {/* Artista */}
       <CardPersonalizada  image={""} alt={"Gustavo Cerati"} name={"Gustavo Cerati"} tipo={"Mix"} route={"/dashboard/playlist"}/>
        {/* Artista */}
        <CardPersonalizada  image={""} alt={"Gustavo Cerati"} name={"Gustavo Cerati"} tipo={"Mix"} route={"/dashboard/playlist"}/>
      {/* Artista */}
      <CardPersonalizada  image={""} alt={"Gustavo Cerati"} name={"Gustavo Cerati"} tipo={"Mix"} route={"/dashboard/playlist"}/>
      {/* Artista */}
      <CardPersonalizada  image={""} alt={"Gustavo Cerati"} name={"Gustavo Cerati"} tipo={"Mix"} route={"/dashboard/playlist"}/>
      
      </div>
    </div>
  );
}

function BotonesHeader() {
  return (
    <div>
      <div className="flex justify-between mb-10 text-white">
        <div className="flex gap-5">
          <button className="p-1 scale-125 bg-[#130A32] rounded-full">
            <FaAngleLeft className="text-[25px]  " />
          </button>
          <button className="p-1 scale-125 bg-[#0A051A] rounded-full">
            <FaAngleRight className="text-[25px]   " />
          </button>
        </div>
        <div className="flex gap-3">
          <Link
            to={'/profile/notifications'}
            className="p-1 scale-125 bg-[#130A32] rounded-full"
          >
            <IoIosNotificationsOutline className="text-[30px]" />
          </Link>

          <button className="p-1 scale-125 bg-[#130A32] rounded-full">
            <MdGroups className="text-[30px]" />
          </button>

          <Link
            to={'/profile'}
            className="p-1 scale-125 bg-[#130A32] rounded-full"
          >
            <FaRegUserCircle className="text-[30px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function CardPersonalizada({ image, alt, name, tipo, route }) {
  return (
    <Link to={route} className="bg-[#322A53] flex items-center h-[6.7rem] rounded-[10px]">
      <img
        src={image}
        alt={alt}
        className="h-[100%] w-[30%] bg-red-200"
      />
      <div>
        <div>
          <h3  className="px-4 text-4xl font-bold text-white p">{name}</h3>
          <h3  className='px-4 text-4xl font-bold text-white h3'>{tipo}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Dashboard;
