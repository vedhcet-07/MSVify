import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SongList from '../components/SongList';
import PlaylistHeader from '../components/playlist/PlaylistHeader';
import PlaylistActions from '../components/playlist/PlaylistActions';
import { usePlaylist } from '../hooks/usePlaylist';
import { usePlaylistPlayback } from '../hooks/usePlaylistPlayback';
import { usePlayer } from '../hooks/usePlayer';
import PageLayout from '../components/layout/PageLayout';

const Playlist = () => {
  const { id } = useParams();
  const { playlist, songs } = usePlaylist(id);
  const { playNext } = usePlaylistPlayback(songs);
  const { setOnSongEnd } = usePlayer();

  useEffect(() => {
    setOnSongEnd(() => playNext);
    return () => setOnSongEnd(undefined);
  }, [playNext, setOnSongEnd]);

  if (!playlist) {
    return (
      <PageLayout>
        <div className="p-6">
          <h1 className="text-2xl text-white">Playlist not found</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout showFooter>
      <PlaylistHeader playlist={playlist} />
      <div className="p-6">
        <PlaylistActions songs={songs} />
        <SongList songs={songs} />
      </div>
    </PageLayout>
  );
};

export default Playlist;