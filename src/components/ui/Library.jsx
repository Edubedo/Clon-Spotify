import { VscLibrary } from 'react-icons/vsc';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// Imagenes
import imgLikedSongs from '../../assets/images/album/liked_songs.jpg';
import imgTheDoors from '../../assets/images/album/theDoors2.jpg';
import imgNevermind from '../../assets/images/album/nevermind.png';
import imgGustavoCerati from '../../assets/images/album/gustavo_cerati.jpg';
import imgOkComputer from '../../assets/images/album/OkComputer.jpg';
import imgLoveless from '../../assets/images/album/loveless.jpg';
import imgAM from '../../assets/images/album/AM.jpg';
import imgParachute from '../../assets/images/album/Parachute.jpg';
import { useLibrary } from '../../context/LibraryOpenClose';

const Library = () => {
  const { setIsLibraryOpen, isLibraryOpen } = useLibrary();
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <button
            className="font-medium text-neutral-400 text-md"
            onClick={() => {
              {
                isLibraryOpen
                  ? setIsLibraryOpen(false)
                  : setIsLibraryOpen(true);
              }
            }}
          >
            <div className="flex items-center gap-2">
              <VscLibrary className="items-center mr-4 text-neutral-400" size={40} />
              <p>Your Library</p>
            </div>
          </button>
        </div>
        <AiOutlinePlus
          size={20}
          className="transition cursor-pointer text-neutral-400 hover:text-white"
        />
      </div>
      <div className="flex flex-col px-3 mt-4 gap-y-2">
        <div>
          <OneTargetMusic
            image={imgLikedSongs}
            alt={'Liked Songs'}
            name={'Liked Songs'}
            tipo={'Playlist'}
            route={'/profile/likes'}
          />
          <div className="h-[10px]"></div>
          <OneTargetMusic
            image={imgTheDoors}
            alt={'The Doors'}
            name={'The Doors'}
            tipo={'Album • The Doors'}
            route={'/dashboard/playlist/the_doors_exitos/'}
          />
          <div className="h-[10px]"></div>
          <OneTargetMusic
            image={imgNevermind}
            alt={'Nevermind'}
            name={'Nevermind'}
            tipo={'Album • Nirvana'}
            route={'/dashboard/playlist/nevermind_nirvana/'}
          />
          <div className="h-[10px]"></div>
          <OneTargetMusic
            image={imgGustavoCerati}
            alt={'Cerati'}
            name={'Gustavo Cerati Mix'}
            tipo={'Mix'}
            route={'/dashboard/playlist/'}
          />
          <div className="h-[10px]"></div>
          <OneTargetMusic
            image={imgOkComputer}
            alt={'Ok Computer'}
            name={'Ok Computer'}
            tipo={'Album • Radiohead'}
            route={'/dashboard/playlist/'}
          />
          <div className="h-[10px]"></div>
          <OneTargetMusic
            image={imgLoveless}
            alt={'Loveless'}
            name={'Loveless'}
            tipo={'Album • My Bloody Valentine'}
            route={'/dashboard/playlist/'}
          />
          <div className="h-[10px]"></div>
          <OneTargetMusic
            image={imgAM}
            alt={'AM'}
            name={'AM'}
            tipo={'Album • Arctic Monkeys'}
            route={'/dashboard/playlist/'}
          />
          <div className="h-[10px]"></div>
          <OneTargetMusic
            image={imgParachute}
            alt={'Parachutes'}
            name={'Parachutes'}
            tipo={'Album • Coldplay'}
            route={'/dashboard/playlist/'}
          />
        </div>
      </div>
    </div>
  );
};

function OneTargetMusic({ image, alt, name, tipo, route }) {
  return (
    <Link
      to={route}
      className="flex items-center h-[4rem] rounded-[10px] hover:bg-neutral-100/5 transition"
    >
      <img src={image} alt={alt} className="h-[100%] w-[15%] rounded-md" />
      <div>
        <div>
          <h3 className="px-4 font-bold text-white text-1xl p">{name}</h3>
          <h3 className="px-4 text-white text-1xl h3">{tipo}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Library;
