import React from 'react';
import { Link } from 'react-router-dom';
import MiniCardPlaylists from './MiniCardPlaylists';

function CardDashboardSongs({
  sectionName,
  rout,
  arrayInfoSectionRecommendation,
  alt
}) {
  return (
    <div className="text-white bg-[#121212] h-[400px] mt-5 p-2">
      <Link to={rout} className="font-bold ">
        <div className="flex items-center justify-between p-5">
          <h4 className=" hover:underline text-[2rem] font-semibold  hover:underline cursor-pointer">
            {sectionName}
          </h4>
          <div className="text-[#aaa] hover:underline  text-[1.1rem]">
            Show All
          </div>
        </div>
      </Link>
      <div>
        {
          <MiniCardPlaylists
            arrayInfoSectionRecommendation={arrayInfoSectionRecommendation}
          />
        }
      </div>
    </div>
  );
}

export default CardDashboardSongs;
