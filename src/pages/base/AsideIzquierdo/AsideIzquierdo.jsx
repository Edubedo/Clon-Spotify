import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi'

const AsideIzquierdo = () => {
  return (

    
    <div className='h-full'>
      <div className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>

        <box className="bg-neutral-800 rounded-lg h-fit w-full text-white">
          <div className='flex flex-col gap-y-4 px-5 py-4'>
            <div className='flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1'>
              <HiHome />
              <Link>Home</Link>
            </div>
            <div className='flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1'>
              <BiSearch />
              <Link>Search</Link>
            </div>
          </div>
        </box>
        <box className="bg-neutral-800 rounded-lg overflow-y-auto h-[100vh] text-white">
          Canciones
        </box>

      </div>
    </div>

  );
    
}

export default AsideIzquierdo;
