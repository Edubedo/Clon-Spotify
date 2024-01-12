import { VscLibrary } from "react-icons/vsc"
import { AiOutlinePlus } from "react-icons/ai"
import { Link } from 'react-router-dom';

// Imagenes
import imgLikedSongs from '../../assets/images/album/liked_songs.jpg';
import imgTheDoors from '../../assets/images/album/theDoors2.jpg';

const Library = () => {

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <VscLibrary className="text-neutral-400" size={25} />
                    <p className="text-neutral-400 font-medium text-md">
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus size={20} className="text-neutral-400 cursor-pointer hover:text-white transition"/>
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
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
                tipo={'Album'}
                route={'/dashboard/playlist/the_doors_exitos/'}
                />

                
                </div>
            </div>
        </div>
    );
}

function OneTargetMusic({ image, alt, name, tipo, route }) {
    return (
      <Link
        to={route}
        className="flex items-center h-[4rem] rounded-[10px] hover:bg-neutral-100/5 transition"
      >
        <img src={image} alt={alt} className="h-[100%] w-[15%]"/>
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