import React from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import FeaturedPlaylists from '../components/FeaturedPlaylists';
import RecommendedSection from '../components/RecommendedSection';
import SongList from '../components/SongList';
import { mockSongs } from '../data/mockData';
import PageLayout from '../components/layout/PageLayout';

const Home = () => {
  return (
    <PageLayout showFooter>
      <div className="p-6">
        <WelcomeHeader id="welcome-header" />
        <FeaturedPlaylists />
        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-6">Popular Songs</h2>
          <SongList songs={mockSongs} />
        </div>
        <RecommendedSection />
      </div>
    </PageLayout>
  );
};

export default Home;
