import React from 'react';
import { Link } from 'react-router-dom';

function CardDashboardSongs({
  sectionName,
  rout,
  arrayInfoSectionRecommendation,
  alt
}) {
  return (
    <div className="text-white bg-[#121212] h-[400px] mt-6 p-5">
      <div className="flex justify-between">
        <h4 className="text-[3rem] font-semibold">{sectionName}</h4>
        <Link to={rout}>Show All</Link>
      </div>
      <div>{miniCardPlaylists(arrayInfoSectionRecommendation)}</div>
    </div>
  );
}

function miniCardPlaylists({ arrayInfoSectionRecommendation }) {
  return <div>miniCardPlaylists</div>;
}

export default CardDashboardSongs;
