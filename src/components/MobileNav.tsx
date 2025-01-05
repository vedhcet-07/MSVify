import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Search, Library, User, Menu, X, PlusSquare } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import UserInfo from './UserInfo';

const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNavigation = (path, elementId = null) => {
    toggleDrawer(); // Close the drawer

    if (path === '/') {
      navigate(path); // Navigate to the home route
      setTimeout(() => {
        if (elementId) {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 0); // Ensure navigation completes before scrolling
    } else {
      navigate(path); // Navigate directly for other routes
    }
  };

  return (
    <>
      {/* Floating Menu Icon */}
      <button
        onClick={toggleDrawer}
        className={`md:hidden fixed top-4 ${
          isDrawerOpen ? 'left-3/4' : 'left-4'
        } bg-black text-white p-3 rounded-full shadow-lg border border-white transition-all duration-300 ease-in-out z-20`}
      >
        {isDrawerOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-black transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="p-4">
          {/* Logo */}
          <div className="flex items-center mb-6">
            <img
              src="https://i.ibb.co/K6mKLhs/msvify-1.png"
              alt="Music Icon"
              className="h-10 w-10 mr-2"
            />
            <span className="text-white text-xl font-bold">MSVify</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <button
              onClick={() => handleNavigation('/', 'welcome-header')}
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Home className="h-6 w-6 mr-3" />
              <span className="text-base">Home</span>
            </button>
            <button
              onClick={() => handleNavigation('/search')}
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Search className="h-6 w-6 mr-3" />
              <span className="text-base">Search</span>
            </button>
            <button
              onClick={() => handleNavigation('/library')}
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Library className="h-6 w-6 mr-3" />
              <span className="text-base">Library</span>
            </button>
            <button
              onClick={() => handleNavigation('/create-playlist')}
              className="flex items-center text-gray-300 hover:text-white"
            >
              <PlusSquare className="h-6 w-6 mr-3" />
              <span className="text-base">Create Playlist</span>
            </button>
            <UserInfo />
          </nav>

          {/* User Info and Logout */}

        </div>
        
      </div>
       

      {/* Background Overlay (for when the drawer is open) */}
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-5"
        />
      )}
    </>
  );
};

export default MobileNav;
