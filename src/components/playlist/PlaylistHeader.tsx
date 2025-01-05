import React from 'react';
import { Playlist } from '../../types/music';

interface PlaylistHeaderProps {
  playlist: Playlist;
}

const PlaylistHeader: React.FC<PlaylistHeaderProps> = ({ playlist }) => {
  return (
    <div 
      className="relative h-[300px] bg-cover bg-center"
      style={{ backgroundImage: `url(${playlist.coverUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="h-full flex items-end p-8">
          <div>
            <p className="text-white text-sm font-medium mb-2">PLAYLIST</p>
            <h1 className="text-4xl font-bold text-white mb-4">{playlist.title}</h1>
            <p className="text-gray-300">{playlist.description}</p>
            <p className="text-gray-300 mt-2">{playlist.songs} songs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistHeader;