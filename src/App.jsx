import React from 'react';
// Base
import Header from './pages/base/Header/Header.jsx';
import AsideIzquierdo from './pages/base/AsideIzquierdo/AsideIzquierdo.jsx';
import AsideDerecho from './pages/base/AsideDerecho/AsideDerecho.jsx';
import Footer from './pages/base/Footer/Footer.jsx';
import Error404 from './pages/base/Error404/Error404.jsx';

// Auth
import Register from './pages/auth/register/Register.jsx';
import Login from './pages/auth/login/Login.jsx';
import Restore from './pages/auth/restore/Restore.jsx';
import Success from './pages/auth/success/Success.jsx';

// Dashboard
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Playlist from './pages/dashboard/playlist/Playlist.jsx';

// Profile
import Profile from './pages/profile/Profile.jsx';
import Settings from './pages/profile/settings/Settings.jsx';
import Likes from './pages/profile/likes/Likes.jsx';
import Notifications from './pages/profile/notifications/Notifications.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/base/Home.jsx';

import {LibraryProvider, useLibrary} from './context/LibraryOpenClose.jsx';

function App() {

  return (
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
          <AsideIzquierdo />
          <main className="mr-10 h-screen  rounded-[30px] bg-[#000] overflow-y-auto overflow-x-hidden [grid-area:main] flex flex-col">
            <Routes>
              <Route element={<Error404 />} path="*"></Route>

              <Route element={<Home />} path="/"></Route>
              {/* Auth */}
              <Route element={<Register />} path="/auth/register"></Route>
              <Route element={<Login />} path="/auth/login"></Route>
              <Route element={<Restore />} path="/auth/restore"></Route>
              <Route element={<Success />} path="/auth/success"></Route>

              {/* Profile  */}
              <Route element={<Profile />} path="/profile"></Route>
              <Route element={<Settings />} path="/profile/settings"></Route>
              <Route element={<Likes />} path="/profile/likes"></Route>
              <Route
                element={<Notifications />}
                path="/profile/notifications"
              ></Route>

              {/* Dashboard */}
              <Route element={<Dashboard />} path="/dashboard"></Route>
              <Route element={<Playlist />} path="/dashboard/playlist"></Route>
            </Routes>
          </main>
          <AsideDerecho />
        </div>
        <Footer />
      </BrowserRouter>
    </LibraryProvider>
  );
}

export default App;
