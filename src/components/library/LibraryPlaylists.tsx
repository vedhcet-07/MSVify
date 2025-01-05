import React from 'react';
import { mockPlaylists, mock2Playlists } from '../../data/mockData';
import PlaylistCard from '../PlaylistCard';

const LibraryPlaylists = () => {
  const allPlaylists = [...mockPlaylists, ...mock2Playlists];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {allPlaylists.map((playlist) => (
        <PlaylistCard
          key={playlist.id}
          id={playlist.id}
          title={playlist.title}
          coverUrl={playlist.coverUrl}
          songs={playlist.songs}
        />
      ))}
    </div>
  );
};

export default LibraryPlaylists;