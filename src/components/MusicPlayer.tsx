import React, { useEffect, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { usePlayer } from '../hooks/usePlayer';
import { mockSong } from './path-to-your-mock-songs'; // Import your mockSongs array

const MusicPlayer = () => {
  const {
    currentSong,
    isPlaying,
    progress,
    pauseSong,
    resumeSong,
    seekTo,
    playNext,
    playPrevious,
    setVolume,
    volume,
  } = usePlayer();

  const [totalTime, setTotalTime] = useState(0);

  // Update the total time when currentSong changes
  useEffect(() => {
    if (currentSong) {
      setTotalTime(currentSong.duration); // Using the duration directly from the mockSong
    }
  }, [currentSong]);

  if (!currentSong) return null;

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-gray-800 py-3 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
        {/* Mobile Layout: Album Cover, Song Info, and Playback Controls in One Line */}
        <div className="flex items-center justify-between w-full md:justify-start space-x-4">
          {/* Album Cover */}
          <img
            src={currentSong.coverUrl}
            alt={currentSong.title}
            className="w-14 h-14 rounded-md"
          />
          {/* Song Info */}
          <div className="flex-1 truncate text-left">
            <h4 className="text-white text-sm font-medium truncate">
              {currentSong.title}
            </h4>
            <p className="text-gray-400 text-xs truncate">
              {currentSong.artist}
            </p>
          </div>
          {/* Playback Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={playPrevious}
              className="text-gray-400 hover:text-white transition"
            >
              <SkipBack size={20} />
            </button>
            <button
              onClick={isPlaying ? pauseSong : resumeSong}
              className="text-white p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
              onClick={playNext}
              className="text-gray-400 hover:text-white transition"
            >
              <SkipForward size={20} />
            </button>
          </div>
        </div>

        {/* Seek Bar */}
        <div className="w-full md:w-auto">
          <div className="flex items-center w-full space-x-2">
            <span className="text-gray-400 text-xs">
              {formatTime(progress)}
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => seekTo(Number(e.target.value))}
              className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-gray-400 text-xs">
              {totalTime} {/* Displaying duration as text */}
            </span>
          </div>
        </div>

        {/* Volume Control (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-3">
          <Volume2 size={20} className="text-gray-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-28 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
