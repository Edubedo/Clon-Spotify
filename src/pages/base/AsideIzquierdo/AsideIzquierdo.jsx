import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi'
import Library from '../../../components/ui/Library';

function AsideIzquierdo () {
  return (

    
    <div className='h-screen overflow-auto [grid-area:aside] flex flex-col'>
      <div className='sm:flex flex-col gap-y-2 bg-black h-full w-[470px] p-2'>
        <div className="w-full text-white rounded-lg bg-neutral-800 h-fit">
          <div className='flex flex-col px-5 py-4 gap-y-4'>
            <div className='flex flex-row items-center w-full h-auto py-1 font-medium transition cursor-pointer gap-x-4 text-md hover:text-white text-neutral-400'>
              <HiHome size={25}/>
              <Link to={"/dashboard"}>Home</Link>
            </div>
            <div className='flex flex-row items-center w-full h-auto py-1 font-medium transition cursor-pointer gap-x-4 text-md hover:text-white text-neutral-400'>
              <BiSearch size={25}/>
              <Link>Search</Link>
            </div>
          </div>
        </div>
        <div className="bg-neutral-800 rounded-lg overflow-y-auto h-[100vh] text-white">
          <Library />
        </div>

      </div>
    </div>

  );
    
}

export default AsideIzquierdo;