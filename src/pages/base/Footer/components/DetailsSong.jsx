import React from 'react';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { LuMic2 } from 'react-icons/lu';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { MdDevices } from 'react-icons/md';

import { FaVolumeMute } from 'react-icons/fa';
import { GoUnmute } from 'react-icons/go';
import { GoDotFill } from 'react-icons/go';

import { MdOpenInFull } from 'react-icons/md';
import { useLibraryOpenCloseArtist } from '../../../../context/LibraryOpenCloseArtist';
function DetailsSong({
  setDisplayVideo,
  setLyrics,
  setPlayingVideo,
  setQueue,
  setDevice,
  setSound,
  setScreen,
  cancionTheDoors
}) {
  const { setIsLibraryArtistOpen } = useLibraryOpenCloseArtist();
  return (
    <div className="flex gap-3 text-[20px] items-center">
      <button
        onClick={() => {
          setDisplayVideo(!cancionTheDoors.displayVideo);
        }}
      >
        {cancionTheDoors.displayVideo ? (
          <div
            className="text-green-600"
            onClick={() => {
              setIsLibraryArtistOpen(false);
            }}
          >
            <MdOutlineVideoLibrary />
            <GoDotFill className="translate-y" />
          </div>
        ) : (
          <MdOutlineVideoLibrary
            onClick={() => {
              setIsLibraryArtistOpen(true);
            }}
          />
        )}
      </button>

      <button>
        <LuMic2 />
      </button>
      <button>
        <HiOutlineQueueList />
      </button>
      <MdDevices />
      {cancionTheDoors.sound ? (
        <button>
          <GoUnmute />
        </button>
      ) : (
        <button>
          <FaVolumeMute />
        </button>
      )}

      {/* Screen */}
      <button>
        <MdOpenInFull />
      </button>
    </div>
  );
}

export default DetailsSong;
