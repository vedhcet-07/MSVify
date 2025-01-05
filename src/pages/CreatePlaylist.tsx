import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Music } from 'lucide-react';

const CreatePlaylist = () => {
  return (
    <PageLayout showFooter>
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
        <div className="text-center">
          <Music className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Create Your Playlist</h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Coming Soon! You'll be able to create and customize your own playlists.
          </p>
          <p className="text-gray-500 mt-4">
            Stay tuned for updates...
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default CreatePlaylist;