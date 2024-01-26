import React from 'react';
import Cancion from './components/Cancion';
import About from './components/About';
import Merch from './components/Merch';
import Queue from './components/Queue';

function AsideDerecho() {
  
  return (
    <aside className="h-[100%] right-0 bg-[#121212] text-white  ">
      <Cancion/>
      <About/>
      <Merch/>
      <Queue/>
    </aside>
  );
}

export default AsideDerecho;
