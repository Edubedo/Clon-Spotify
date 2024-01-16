import React from 'react';
import { Link } from 'react-router-dom';

function MiniCardPlaylists({ arrayInfoSectionRecommendation }) {
  return (
    <>
      <div className="grid items-center grid-cols-4 gap-3 overflow-hidden">
        {arrayInfoSectionRecommendation.map(recommendation => {
          return (
            <div className="">
              <Link to={recommendation.route} className="">
                <div className=" bg-[#181818] h-[17rem] py-1 px-3">
                  <div className="overflow-hidden h-[12rem] mt-2 ">
                    <img
                      className="w-full h-[10rem] rounded-[1rem]"
                      src={recommendation.img}
                      alt={recommendation.alt}
                    />
                  </div>
                  <div className="">
                    <h4 className='text-[1.2rem] font-bold'>{recommendation.title}</h4>
                    <p className="text-[.9rem] text-[#777]">{recommendation.subtitle}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MiniCardPlaylists;
