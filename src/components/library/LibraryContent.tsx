import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '../ui/Tabs';
import LibraryPlaylists from './LibraryPlaylists';
import LibrarySongs from './LibrarySongs';

const LibraryContent = () => {
  const [activeTab, setActiveTab] = useState('playlists');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <Tabs value={activeTab} onChange={handleTabChange}>
          <TabsList>
            <TabsTrigger
              value="playlists"
              onClick={() => handleTabChange('playlists')}
              className={activeTab === 'playlists' ? 'border-b-2 border-green-500' : ''}
            >
              Playlists
            </TabsTrigger>
            <TabsTrigger 
              value="songs" 
              onClick={() => handleTabChange('songs')}
              className={activeTab === 'songs' ? 'border-b-2 border-green-500' : ''}
            >
              Songs
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {activeTab === 'playlists' ? <LibraryPlaylists /> : <LibrarySongs />}
    </div>
  );
}

export default LibraryContent;