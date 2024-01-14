import React from 'react';
import { Link } from 'react-router-dom';

function MiniCardPlaylists({ arrayInfoSectionRecommendation }) {
  console.log(
    'arrayInfoSectionRecommendation> ',
    arrayInfoSectionRecommendation
  );
  return (
    <>
      <div className='grid items-center grid-cols-4 gap-2'>
        {arrayInfoSectionRecommendation.map(recommendation => {
          return (
            <div className="p-1 ">
              <Link to={recommendation.route} className="">
                <div className='p- bg-[#181818] h-[12rem]'>
                  <div className='overflow-hidden h-[6rem] '>
                    <img
                      className="object-cover"
                      src={recommendation.img}
                      alt={recommendation.alt}
                    />
                  </div>
                  <div className=' h-30'>
                    <h4>{recommendation.title}</h4>
                    <p className='text-[10px]'>{recommendation.subtitle}</p>
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
