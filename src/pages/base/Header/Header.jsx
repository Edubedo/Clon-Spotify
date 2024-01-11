import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import CardDesplegadaHeader from './components/CardDesplegadaHeader';

function Header() {
  const [openButtonOptions, setOpenButtonOptions] = useState(false);
  return (
    <header className="bg-[#000] pt-1 pl-3 text-[16px] sticky top-0">
      <button
        name="Boton para desplegar cada  de ayuda"
        onClick={() => {
          setOpenButtonOptions(!openButtonOptions);
        }}
      >
        <BsThreeDots className="text-white" />
      </button>
      {openButtonOptions && <CardDesplegadaHeader />}
    </header>
  );
}

export default Header;
