import React from 'react';
// Base
import AsideDerecho from '../../../pages/base/AsideDerecho/AsideDerecho.jsx';
import Error404 from '../../../pages/base/Error404/Error404.jsx';

// Auth
import Register from '../../../pages/auth/register/Register.jsx';
import Login from '../../../pages/auth/login/Login.jsx';
import Restore from '../../../pages/auth/restore/Restore.jsx';
import Success from '../../../pages/auth/success/Success.jsx';

// Dashboard
import Dashboard from '../../../pages/dashboard/Dashboard.jsx';
import Playlist from '../../../pages/dashboard/playlist/Playlist.jsx';

// Profile
import Profile from '../../../pages/profile/Profile.jsx';
import Settings from '../../../pages/profile/settings/Settings.jsx';
import Likes from '../../../pages/profile/likes/Likes.jsx';
import Notifications from '../../../pages/profile/notifications/Notifications.jsx';
import Home from '../../../pages/base/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import { useLibraryOpenCloseArtist } from '../../../context/LibraryOpenCloseArtist.jsx';

function Main() {
  const { isLibraryArtistOpen, setIsLibraryArtistOpen } =
    useLibraryOpenCloseArtist();

  return (
    <div
      className="grid grid-cols-2 gap-4"
      style={isLibraryArtistOpen ? { gridTemplateColumns: '2fr 1fr' } : { gridTemplateColumns: '1fr' }  }
    >
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
      {isLibraryArtistOpen && <AsideDerecho />}
    </div>
  );
}

export default Main;
