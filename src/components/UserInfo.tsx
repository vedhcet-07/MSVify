import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useProfile } from '../hooks/useProfile';

const UserInfo = () => {
  const { user, logout } = useAuth();
  const { profile, loading } = useProfile(user?.id);

  if (loading) {
    return <div className="text-gray-400">Loading...</div>;
  }

  return (
    <div className="text-sm text-gray-400">
      <p>Signed in as</p>
      <p className="font-semibold text-white">{profile?.username || user?.email}</p>
      <button
        onClick={logout}
        className="mt-2 text-gray-300 hover:text-white transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserInfo;