import React from 'react';
import { Link } from 'react-router-dom';

interface PlaylistCardProps {
  id: string;
  title: string;
  coverUrl: string;
  songs: number;
}

const PlaylistCard = ({ id, title, coverUrl, songs }: PlaylistCardProps) => {
  return (
    <Link to={`/playlist/${id}`}>
      <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition cursor-pointer">
        <img 
          src={coverUrl} 
          alt={title} 
          className="w-full aspect-square object-cover rounded-md mb-4"
        />
        <h3 className="text-white font-semibold truncate">{title}</h3>
        <p className="text-gray-400 text-sm">{songs} songs</p>
      </div>
    </Link>
  );
};

export default PlaylistCard;