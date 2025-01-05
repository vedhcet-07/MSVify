import React from 'react';
import { Play, Pause } from 'lucide-react';
import { usePlayer } from '../hooks/usePlayer';
import { Song } from '../types/music';

interface SongListProps {
  songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  const { currentSong, isPlaying, playSong, pauseSong, resumeSong } =
    usePlayer();

  const handlePlayClick = (song: Song) => {
    if (currentSong?.id === song.id) {
      isPlaying ? pauseSong() : resumeSong();
    } else {
      // Play the selected song and set the current playlist
      playSong(song, songs);
    }
  };

  return (
    <div className="space-y-2">
      {songs.map((song) => (
        <div
          key={song.id}
          className={`flex items-center p-2 rounded-md ${
            currentSong?.id === song.id
              ? 'bg-gray-800/50'
              : 'hover:bg-gray-800/50'
          }`}
        >
          <button
            onClick={() => handlePlayClick(song)}
            className={`p-2 transition ${
              currentSong?.id === song.id && isPlaying
                ? 'text-green-500'
                : 'text-white'
            }`}
          >
            {currentSong?.id === song.id && isPlaying ? (
              <Pause size={20} />
            ) : (
              <Play size={20} />
            )}
          </button>
          <img
            src={song.coverUrl}
            alt={song.title}
            className="w-10 h-10 rounded ml-2"
          />
          <div className="ml-4 flex-1">
            <h4 className="text-white font-medium">{song.title}</h4>
            <p className="text-gray-400 text-sm">{song.artist}</p>
          </div>
          <span className="text-gray-400 text-sm">{song.duration}</span>
        </div>
      ))}
    </div>
  );
};

export default SongList;