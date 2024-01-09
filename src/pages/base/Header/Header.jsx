import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import CardDesplegadaHeader from './components/CardDesplegadaHeader';

function Header() {
  return (
    <header className="bg-[#000] pt-1 pl-3 text-[16px] sticky top-0">
      <button name="Boton para desplegar cada  de ayuda">
        <BsThreeDots className="text-white" />
      </button>
      <CardDesplegadaHeader/>
    </header>
  );
}

export default Header;
