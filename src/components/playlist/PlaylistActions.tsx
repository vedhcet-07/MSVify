import React from 'react';
import { Play, Pause } from 'lucide-react';
import { usePlayer } from '../../hooks/usePlayer';
import { Song } from '../../types/music';

interface PlaylistActionsProps {
  songs: Song[];
}

const PlaylistActions: React.FC<PlaylistActionsProps> = ({ songs }) => {
  const { currentSong, isPlaying, playSong, pauseSong, resumeSong } = usePlayer();

  const handlePlayAll = () => {
    if (songs.length === 0) return;
    
    // If the first song is already playing
    if (currentSong?.id === songs[0].id) {
      isPlaying ? pauseSong() : resumeSong();
    } else {
      // Play the first song and set the current playlist
      playSong(songs[0], songs);
    }
  };

  const isFirstSongPlaying = currentSong?.id === songs[0]?.id && isPlaying;

  return (
    <div className="flex items-center space-x-4 mb-6">
      <button
        onClick={handlePlayAll}
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
        disabled={songs.length === 0}
      >
        {isFirstSongPlaying ? (
          <Pause className="w-6 h-6 text-black" />
        ) : (
          <Play className="w-6 h-6 text-black ml-1" />
        )}
      </button>
    </div>
  );
};

export default PlaylistActions;