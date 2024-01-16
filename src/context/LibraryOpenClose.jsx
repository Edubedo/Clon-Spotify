// LibraryOpenClose.jsx

import React, { createContext, useContext, useState } from 'react';

const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  return (
    <LibraryContext.Provider value={{ isLibraryOpen, setIsLibraryOpen }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error(
      'useLibrary debe ser utilizado dentro de un LibraryProvider'
    );
  }
  return context;
};
