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
      <div className="flex items-center justify-between">
        <h4 className="text-[2rem] font-semibold">{sectionName}</h4>
        <Link to={rout}>Show All</Link>
      </div>
      <div>{<MiniCardPlaylists arrayInfoSectionRecommendation={arrayInfoSectionRecommendation}/>}</div>
    </div>
  );
}

export default CardDashboardSongs;
