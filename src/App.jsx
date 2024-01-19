import React from 'react';
// Base
import Header from './pages/base/Header/Header.jsx';
import AsideIzquierdo from './pages/base/AsideIzquierdo/AsideIzquierdo.jsx';
import Footer from './pages/base/Footer/Footer.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LibraryProvider, useLibrary } from './context/LibraryOpenClose.jsx';
import { LibraryArtistProvide } from './context/LibraryOpenCloseArtist.jsx';
import Main from './pages/base/Main/Main.jsx';

function App() {
  return (
    <LibraryArtistProvide>
      <LibraryProvider>
        <BrowserRouter>
          {/* PRIVATE ROUTES */}
          <Header />
          <div
            className="grid h-full bg-black"
            style={{
              gridTemplateAreas: `"header header header"
                        "aside main main"
                        "player player player"`,
              gridTemplateRows: '1fr auto'
            }}
          >
            <AsideIzquierdo />{' '}
            <main
              className="mx-3 sm:mr-5 h-screen  rounded-[30px] bg-[#000]  [grid-area:main]  grid gap-3"
            >
              {' '}
              <div className="overflow-x-hidden overflow-y-auto ">
                <Main />{' '}
              </div>
            </main>
          </div>
          <Footer />
        </BrowserRouter>
      </LibraryProvider>
    </LibraryArtistProvide>
  );
}

export default App;
