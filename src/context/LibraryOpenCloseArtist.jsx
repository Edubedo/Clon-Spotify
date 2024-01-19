// LibraryOpenClose.jsx

import React, { createContext, useContext, useState } from 'react';

const LibraryContextArtist = createContext();

export const LibraryArtistProvide = ({ children }) => {
  const [isLibraryArtistOpen, setIsLibraryArtistOpen] = useState(false);

  return (
    <LibraryContextArtist.Provider value={{ isLibraryArtistOpen, setIsLibraryArtistOpen }}>
      {children}
    </LibraryContextArtist.Provider>
  );
};

export const useLibraryOpenCloseArtist = () => {
  const context = useContext(LibraryContextArtist);
  if (!context) {
    throw new Error(
      'useLibraryOpenCloseArtist debe ser utilizado dentro de un LibraryArtistProvide'
    );
  }
  return context;
};
