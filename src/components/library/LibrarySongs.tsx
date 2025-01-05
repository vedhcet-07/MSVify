import React from 'react';
import SongList from '../SongList';
import { mockSongs } from '../../data/mockData';

const LibrarySongs = () => {
  return (
    <div>
      <SongList songs={mockSongs} />
    </div>
  );
};

export default LibrarySongs;