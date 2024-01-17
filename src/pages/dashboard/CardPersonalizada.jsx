import React from 'react';
import { Link } from 'react-router-dom';
import BotonesHeader from './BotonesHeader';

// Imagenes
import imgLikedSongs from '../../assets/images/album/liked_songs.jpg';
import imgGustavoCerati from '../../assets/images/album/gustavo_cerati.jpg';
import imgGustavoCeratiRadio from '../../assets/images/album/gustavo_cerati_radio.jpg';
import imgGustavoCeratiMix from '../../assets/images/album/gustavo_cerati_mix.jpg';
import imgTheDoors from '../../assets/images/album/theDoors2.jpg';
import imgBethoven from '../../assets/images/album/Beethoven.jpg';
function CardPersonalizada() {
  let getCurrentHour = new Date().getHours();
  let greatDependingHour;
  if (getCurrentHour > 3 && getCurrentHour < 12) {
    greatDependingHour = 'Good morning';
  } else if (getCurrentHour >= 12 && getCurrentHour < 20) {
    greatDependingHour = 'Good afternoon';
  } else if (getCurrentHour >= 20 && getCurrentHour <= 23) {
    greatDependingHour = 'Good evening';
  } else {
    greatDependingHour = 'Good day';
  }
  return (
    <div className=" p-4 bg-[#1F1154]">
      {' '}
      <BotonesHeader />
      <h1 className="mb-8 text-5xl font-semibold text-white">{greatDependingHour}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {/* Likes */}
        <OneTargetMusic
          image={imgLikedSongs}
          alt={'liked_songs'}
          name={'Liked Songs'}
          tipo={''}
          route={'/profile/likes'}
        />
        {/* Artista */}
        <OneTargetMusic
          image={imgGustavoCeratiRadio}
          alt={'gustavo_cerati_radio'}
          name={'Gustavo Cerati'}
          tipo={'Radio'}
          route={'/dashboard/playlist'}
        />
        {/* Artista */}
        <OneTargetMusic
          image={imgGustavoCerati}
          alt={'gustavo_cerati_mix'}
          name={'Gustavo Cerati'}
          tipo={'Mix'}
          route={'/dashboard/playlist'}
        />
        {/* Artista */}
        <OneTargetMusic
          image={imgGustavoCeratiMix}
          alt={'gustavo_cerati_daily_mix'}
          name={'Daily mix 1'}
          route={'/dashboard/playlist'}
        />
        {/* Artista */}
        <OneTargetMusic
          image={imgBethoven}
          alt={'ludwig_van_beethoven_mix'}
          name={'Ludwig van Beethoven'}
          tipo={'Mix'}
          route={'/dashboard/playlist'}
        />
        {/* Artista */}
        <OneTargetMusic
          image={imgTheDoors}
          alt={'the_doors_exitos'}
          name={'The Doors'}
          tipo={'Exitos'}
          route={'/dashboard/playlist/'}
        />
      </div>
    </div>
  );
}

function OneTargetMusic({ image, alt, name, tipo, route }) {
  return (
    <Link
      to={`${route}/${alt}`} // La ruta va ir anidada al alt
      className="bg-[#322A53] flex items-center h-[8rem] sm:h-[7rem] rounded-md hover:bg-neutral-100/20 transition"
    >
      <img src={image} alt={alt} className="h-[100%] w-[35%] rounded-md" />
      <div>
        <div>
          <h3 className="px-4 font-bold text-white text-[1.5rem] p">{name}</h3>
          <h3 className="px-4 text-white text-[1.1rem] h3">{tipo}</h3>
        </div>
      </div>
    </Link>
  );
}
export default CardPersonalizada;
