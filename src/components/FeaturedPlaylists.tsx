import React from 'react';
import PlaylistCard from './PlaylistCard';
import { mockPlaylists } from '../data/mockData';

const FeaturedPlaylists = () => {
  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-6">Featured Playlists</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {mockPlaylists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            id={playlist.id}
            title={playlist.title}
            coverUrl={playlist.coverUrl}
            songs={playlist.songs}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlaylists;