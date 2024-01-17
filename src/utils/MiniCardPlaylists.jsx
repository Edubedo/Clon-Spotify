import React from 'react';
import { Link } from 'react-router-dom';

function MiniCardPlaylists({ arrayInfoSectionRecommendation }) {
  return (
    <>
      <div className="grid  items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 p-3 overflow-hidden h-[314px] overflow-hidden ">
        {arrayInfoSectionRecommendation.map(recommendation => {
          return (
            <div className="mb-[100px]">
              <Link to={recommendation.route} className="">
                <div className=" bg-[#181818] h-[22rem] py-1 px-2">
                  <div className="overflow-hidden h-[12rem] mt-2 ">
                    <img
                      className="w-full h-full rounded-[1rem]"
                      src={recommendation.img}
                      alt={recommendation.alt}
                    />
                  </div>
                  <div className="">
                    <h4 className='text-[1.2rem] font-bold'>{recommendation.title}</h4>
                    <p className="text-[.9rem] text-[#777] ">{recommendation.subtitle}</p>
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
