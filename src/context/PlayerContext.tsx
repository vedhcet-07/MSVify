import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Song, PlayerState } from '../types/music';

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  currentPlaylist: Song[] | null;
  playSong: (song: Song, playlist?: Song[]) => void;
  pauseSong: () => void;
  resumeSong: () => void;
  setVolume: (volume: number) => void;
  seekTo: (progress: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  onSongEnd?: () => void;
  setOnSongEnd: (callback: (() => void) | undefined) => void;
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentSong: null,
    isPlaying: false,
    volume: 1,
    progress: 0,
  });
  const [currentPlaylist, setCurrentPlaylist] = useState<Song[] | null>(null);
  const [onSongEnd, setOnSongEnd] = useState<(() => void) | undefined>(undefined);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    audio.volume = playerState.volume;

    const updateProgress = () => {
      if (audio.duration) {
        setPlayerState(prev => ({
          ...prev,
          progress: (audio.currentTime / audio.duration) * 100
        }));
      }
    };

    const handleSongEnd = () => {
      if (onSongEnd) {
        onSongEnd();
      } else if (currentPlaylist) {
        playNext();
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleSongEnd);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, [onSongEnd, playerState.volume]);

  const playSong = (song: Song, playlist?: Song[]) => {
    if (audioRef.current) {
      audioRef.current.src = song.audioUrl;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
      setPlayerState(prev => ({
        ...prev,
        currentSong: song,
        isPlaying: true,
        progress: 0
      }));
      
      // Update current playlist if provided
      if (playlist) {
        setCurrentPlaylist(playlist);
      }
    }
  };

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayerState(prev => ({ ...prev, isPlaying: false }));
    }
  };

  const resumeSong = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Error resuming audio:', error);
      });
      setPlayerState(prev => ({ ...prev, isPlaying: true }));
    }
  };

  const setVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      setPlayerState(prev => ({ ...prev, volume }));
    }
  };

  const seekTo = (progress: number) => {
    if (audioRef.current && audioRef.current.duration) {
      const time = (progress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = time;
      setPlayerState(prev => ({ ...prev, progress }));
    }
  };

  const playNext = () => {
    if (currentPlaylist && playerState.currentSong) {
      const currentIndex = currentPlaylist.findIndex(song => song.id === playerState.currentSong?.id);
      const nextSong = currentPlaylist[(currentIndex + 1) % currentPlaylist.length];
      playSong(nextSong, currentPlaylist);
    }
  };

  const playPrevious = () => {
    if (currentPlaylist && playerState.currentSong) {
      const currentIndex = currentPlaylist.findIndex(song => song.id === playerState.currentSong?.id);
      const previousIndex = currentIndex === 0 ? currentPlaylist.length - 1 : currentIndex - 1;
      const previousSong = currentPlaylist[previousIndex];
      playSong(previousSong, currentPlaylist);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        ...playerState,
        currentPlaylist,
        playSong,
        pauseSong,
        resumeSong,
        setVolume,
        seekTo,
        playNext,
        playPrevious,
        onSongEnd,
        setOnSongEnd,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};