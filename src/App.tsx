import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PlayerProvider } from './context/PlayerContext';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import MusicPlayer from './components/MusicPlayer';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import Playlist from './pages/Playlist';
import CreatePlaylist from './pages/CreatePlaylist';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <PlayerProvider>
        <Router>
          <Toaster position="top-center" />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <div className="flex h-screen bg-black">
                    <Sidebar />
                    <div className="flex-1 flex flex-col">
                      <main className="flex-1 overflow-y-auto pb-24">
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/search" element={<Search />} />
                          <Route path="/library" element={<Library />} />
                          <Route path="/playlist/:id" element={<Playlist />} />
                          <Route path="/create-playlist" element={<CreatePlaylist />} />
                          <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                      </main>
                      <MobileNav />
                      <MusicPlayer />
                    </div>
                  </div>
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </PlayerProvider>
    </AuthProvider>
  );
};

export default App;