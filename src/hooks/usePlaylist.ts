import { useMemo } from 'react';
import { mockPlaylists, mock2Playlists } from '../data/mockData'; // Import both playlists
import { playlistSongs } from '../data/playlistSongs';
import { Playlist, Song } from '../types/music';

export const usePlaylist = (playlistId: string | undefined) => {
  const playlist = useMemo(() => {
    // Search both mockPlaylists and mock2Playlists for the playlist
    return (
      mockPlaylists.find((p) => p.id === playlistId) ||
      mock2Playlists.find((p) => p.id === playlistId)
    );
  }, [playlistId]);

  const songs = useMemo(
    () => (playlistId ? playlistSongs[playlistId] || [] : []),
    [playlistId]
  );

  return {
    playlist,
    songs,
  };
};
