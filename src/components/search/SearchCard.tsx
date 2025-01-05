import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Song } from '../../types/music';
import { usePlayer } from '../../hooks/usePlayer';

interface SearchCardProps {
  song: Song;
}

const SearchCard: React.FC<SearchCardProps> = ({ song }) => {
  const { currentSong, isPlaying, playSong, pauseSong, resumeSong } = usePlayer();
  const isCurrentSong = currentSong?.id === song.id;

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isCurrentSong) {
      isPlaying ? pauseSong() : resumeSong();
    } else {
      playSong(song);
    }
  };

  return (
    <div className="group bg-gray-900/40 rounded-lg p-4 transition-all hover:bg-gray-900/60">
      <div className="relative aspect-square mb-4">
        <img
          src={song.coverUrl}
          alt={song.title}
          className="w-full h-full object-cover rounded-md"
        />
        <button
          onClick={handlePlayClick}
          className="absolute right-2 bottom-2 p-3 bg-green-500 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {isCurrentSong && isPlaying ? (
            <Pause className="h-6 w-6 text-black" />
          ) : (
            <Play className="h-6 w-6 text-black" />
          )}
        </button>
      </div>
      <h3 className="text-white font-semibold truncate">{song.title}</h3>
      <p className="text-gray-400 text-sm truncate">{song.artist}</p>
    </div>
  );
};

export default SearchCard;