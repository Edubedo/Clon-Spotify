import { VscLibrary } from "react-icons/vsc"
import { AiOutlinePlus } from "react-icons/ai"
import { Link } from 'react-router-dom';

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
                image={''}
                alt={'Liked Songs'}
                name={'Liked Songs'}
                tipo={'Playlist'}
                route={'/profile/likes'}
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
        className="flex items-center h-[4rem] rounded-[10px]"
      >
        <img src={image} alt={alt} className="h-[100%] w-[25%] bg-red-200" />
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