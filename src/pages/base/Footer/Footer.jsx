import React from 'react';
import './Footer.css'
import { FaCheckCircle } from 'react-icons/fa';
import LogoAlbumTheDoors from '../../../assets/images/album/theDoors2.jpg';
function Footer() {
  return (
    <footer className=" z-[200] absolute bottom-0 left-0 w-full h-20 bg-principal-4 bg-[#030202] w-[100%]">
      <div className="flex items-center justify-between text-white h-[100%] p-2">
        {/* Song */}
        <div className="flex">
          <img
            src={LogoAlbumTheDoors}
            alt="Album the doors"
            width={60}
            height={20}
            className="rounded-[4px]"
          />
          <div className="items-center mt-1 ml-2">
            <div className="flex items-center ">
              <div className='items-center overflow-hidden'>
                <h4 className="text-[15px] ">Light my fire</h4>
                <p className="text-[13px] text-gray-400 song-info">The doors</p>
              </div>
              <div>
                <FaCheckCircle className='text-green-400 text-[18px] ml-2'/>
              </div>
            </div>
          </div>
        </div>
        {/* Buttons Manage Songs */}
        <div>Songs</div>
        {/* Buttons Detail Song */}
        <div>Songs</div>
      </div>
    </footer>
  );
}

export default Footer;
