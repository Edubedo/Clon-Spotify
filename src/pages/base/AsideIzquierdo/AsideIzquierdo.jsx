import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Library from '../../../components/ui/Library';
import { useLibrary } from '../../../context/LibraryOpenClose';

function AsideIzquierdo() {
  const { isLibraryOpen } = useLibrary();

  return (
    <div
      className={`h-screen overflow-x-hidden [grid-area:aside] relative transition-all ${
        isLibraryOpen ? 'w-[400px]' : 'w-[90px]'
      }`}
    >
      <div className="sm:flex flex-col gap-y-2 bg-black h-full w-[430px] p-2">
        <div className="w-full text-white rounded-lg bg-[#121212] h-fit">
          <div className="flex flex-col px-5 py-4 gap-y-4">
            <div className="flex flex-row items-center w-full h-auto py-1 font-semibold transition cursor-pointer gap-x-4 text-md hover:text-white text-neutral-400">
              <Link to={'/dashboard'}>
                <div className="flex items-center ">
                  <HiHome className="text-[40px] mr-8" />
                  <p>Home</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-row items-center w-full h-auto py-1 font-semibold transition cursor-pointer gap-x-4 text-md hover:text-white text-neutral-400">
              <Link to={'/dashboard/:search'}>
                <div className="flex">
                  <BiSearch className="text-[40px] mr-8 items-center" />
                  <p>Search</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#121212] rounded-lg overflow-y-scroll h-[100vh] text-white">
          <Library />
        </div>
      </div>
    </div>
  );
}

export default AsideIzquierdo;
