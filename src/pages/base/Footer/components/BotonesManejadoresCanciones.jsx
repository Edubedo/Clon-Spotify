import React from 'react';
import { LuShuffle } from 'react-icons/lu';
import { FaBackwardStep } from 'react-icons/fa6';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { BsArrowRepeat } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

function BotonesManejadoresCanciones({
  cancionTheDoors,
  setShuffle,
  setLoop,
  setListening
}) {
  return (
    <div>
      <Botones
        cancionTheDoors={cancionTheDoors}
        setShuffle={setShuffle}
        setListening={setListening}
        setLoop={setLoop}
      />
      <ManejadorTiempo />
    </div>
  );
}

function Botones({ cancionTheDoors, setShuffle, setListening, setLoop }) {
  return (
    <div className="grid items-center justify-center grid-cols-5">
      {/* Shuffle */}
      {cancionTheDoors.shuffle ? (
        <button
          onClick={() => {
            setShuffle(false);
          }}
          className="flex flex-col items-center hover:text-green-400 text-[20px]"
        >
          <LuShuffle className="mx-2 text-green-500 cursor-pointer " />
          <GoDotFill className="text-[10px] text-green-500" />
        </button>
      ) : (
        <button
          onClick={() => {
            setShuffle(true);
          }}
          className="flex flex-col items-center hover:text-gray-200 text-[20px]"
        >
          <LuShuffle className="mx-2 cursor-pointer" />
        </button>
      )}
      {/* Left */}
      <button
        onClick={() => {
          setShuffle(false);
        }}
      >
        <FaBackwardStep className="mx-2  text-[25px] text-gray-300 hover:text-white" />
      </button>
      {/* Pause */}

      {cancionTheDoors.listening ? (
        <button
          onClick={() => {
            setListening(false);
          }}
          className="flex flex-col items-center text-[20px]"
        >
          <FaPauseCircle className="mx-2 cursor-pointer text-[40px] " />
        </button>
      ) : (
        <button
          onClick={() => {
            setListening(true);
          }}
          className="flex flex-col items-center hover:text-gray-200 text-[20px]"
        >
          <FaPlayCircle className="mx-2 cursor-pointer text-[40px]" />
        </button>
      )}
      {/* Right */}
      <button>
        <FaBackwardStep className="mx-2 rotate-180  text-[25px] text-gray-300 hover:text-white" />
      </button>
      {/* Loop */}
      <button
        onClick={() => {
          setLoop(!cancionTheDoors.loop); // Cambiar el estado de loop al hacer clic
        }}
        className={`flex flex-col items-center text-[20px] ${
          cancionTheDoors.loop ? 'text-green-500' : 'text-gray-400'
        }`}
      >
        <BsArrowRepeat className="mx-2 cursor-pointer text-[20px]" />
      </button>
    </div>
  );
}

function ManejadorTiempo() {
  return <div>visualizador</div>;
}

export default BotonesManejadoresCanciones;
