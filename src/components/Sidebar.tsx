import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Library, PlusSquare } from 'lucide-react';
import UserInfo from './UserInfo';

const Sidebar = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="hidden md:flex flex-col w-64 bg-black h-screen p-6">
      <div className="flex items-center mb-0">
        <img
          src="https://i.ibb.co/K6mKLhs/msvify-1.png"
          alt="Music Icon"
          className="h-13 w-13 text-green-500"
        />
        <span />
      </div>
      <div className="flex items-center justify-center mb-5">
        <span className="text-white text-center text-xl font-bold">MSVify</span>
      </div>

      <nav className="space-y-4">
        <Link
          to="/"
          className="flex items-center text-gray-300 hover:text-white"
        >
          <Home className="h-6 w-6 mr-2" />
          <span>Home</span>
        </Link>
        <Link
          to="/search"
          className="flex items-center text-gray-300 hover:text-white"
        >
          <Search className="h-6 w-6 mr-2" />
          <span>Search</span>
        </Link>
        <Link
          to="/library"
          className="flex items-center text-gray-300 hover:text-white"
        >
          <Library className="h-6 w-6 mr-2" />
          <span>Your Library</span>
        </Link>
      </nav>

      <div className="mt-8">
        <Link
          to="/create-playlist"
          className="flex items-center text-gray-300 hover:text-white"
        >
          <PlusSquare className="h-6 w-6 mr-2" />
          <span>Create Playlist</span>
        </Link>
      </div>

      <div className="absolute bottom-20 left-0 right-0 ml-8">
        <UserInfo />
      </div>
    </div>
  );
};

export default Sidebar;