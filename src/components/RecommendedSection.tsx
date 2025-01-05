import React from 'react';
import PlaylistCard from './PlaylistCard';
import { mock2Playlists } from '../data/mockData';

const RecommendedSection = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-white mb-6">Made for you</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {mock2Playlists.map((playlist) => (
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

export default RecommendedSection;
