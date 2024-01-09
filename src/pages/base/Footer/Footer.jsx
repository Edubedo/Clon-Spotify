import React, { useState } from 'react';
import './Footer.css';
import Song from './components/Song';
import BotonesManejadoresCanciones from './components/BotonesManejadoresCanciones';
import LogoAlbumTheDoors from '../../../assets/images/album/theDoors2.jpg';
import CancionMp3 from '../../../assets/audios/lightMyFire.mp3'

function Footer() {
  const [like, setLike] = useState(false); // Estado para el botón de like
  const [shuffle, setShuffle] = useState(false); // Estado para el botón de shuffle
  const [loop, setLoop] = useState(false); // Estado para el botón de lOOP
  const [listening, setListening] = useState(false); // Estado para el botón de Listen

  const cancionTheDoors = {
    mp3: CancionMp3,
    img: LogoAlbumTheDoors,
    name: 'Light my fire',
    band: 'The doors',
    duration: 3.29,
    listening: listening,
    shuffle: shuffle,
    loop: loop,
    like: like // Usar el estado local para manejar el like/dislike
  };
  return (
    <footer className="bottom-0 z-[200] sticky bottom-0 left-0 w-full h-20 bg-principal-4 p-3 bg-[#030202] w-[100%]">
      <div className="flex items-center justify-between text-white h-[100%] p-2">
        {/* Song */}
        <Song cancionTheDoors={cancionTheDoors} setLike={setLike} />
        {/* Buttons Manage Songs */}
        <BotonesManejadoresCanciones
          cancionTheDoors={cancionTheDoors}
          setShuffle={setShuffle}
          setLoop={setLoop}
          setListening={setListening}
        />
        {/* Buttons Detail Song */}
        <div>Songs</div>
      </div>
    </footer>
  );
}

export default Footer;
