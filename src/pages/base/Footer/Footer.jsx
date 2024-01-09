import React from 'react';
import './Footer.css';
import Song from './components/Song';

function Footer() {
  return (
    <footer className="bottom-0 z-[200] sticky bottom-0 left-0 w-full h-20 bg-principal-4 p-3 bg-[#030202] w-[100%]">
      <div className="flex items-center justify-between text-white h-[100%] p-2">
        {/* Song */}
        <Song />
        {/* Buttons Manage Songs */}
        <div>Songs</div>
        {/* Buttons Detail Song */}
        <div>Songs</div>
      </div>
    </footer>
  );
}

export default Footer;
