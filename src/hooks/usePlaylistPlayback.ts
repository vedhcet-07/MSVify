import { useCallback } from 'react';
import { usePlayer } from './usePlayer';
import { Song } from '../types/music';

export const usePlaylistPlayback = (songs: Song[]) => {
  const { currentSong, playSong } = usePlayer();

  const playNext = useCallback(() => {
    if (!currentSong || songs.length === 0) return;
    
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    if (currentIndex === -1) return;
    
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(songs[nextIndex]);
  }, [currentSong, songs, playSong]);

  return { playNext };
};