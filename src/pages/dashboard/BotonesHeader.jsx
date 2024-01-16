import { FaAngleLeft, FaAngleRight, FaRegUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";

export default function BotonesHeader() {
    return (
      <div>
        <div className="flex justify-between p-2 mb-10 text-white">
          <div className="flex gap-5">
            <button className="p-1 scale-125 bg-[#130A32] rounded-full">
              <FaAngleLeft className="text-[25px]  " />
            </button>
            <button className="p-1 scale-125 bg-[#0A051A] rounded-full">
              <FaAngleRight className="text-[25px]   " />
            </button>
          </div>
          <div className="flex gap-3">
            <Link
              to={'/profile/notifications'}
              className="p-1 scale-125 bg-[#130A32] rounded-full"
            >
              <IoIosNotificationsOutline className="text-[30px]" />
            </Link>
  
            <button className="p-1 scale-125 bg-[#130A32] rounded-full">
              <MdGroups className="text-[30px]" />
            </button>
  
            <Link
              to={'/profile'}
              className="p-1 scale-125 bg-[#130A32] rounded-full"
            >
              <FaRegUserCircle className="text-[30px]" />
            </Link>
          </div>
        </div>
      </div>
    );
  }