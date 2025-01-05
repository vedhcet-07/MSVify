import React from 'react';
import SearchCard from './SearchCard';
import { Song } from '../../types/music';

interface SearchResultsProps {
  results: Song[];
  isSearching: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, isSearching }) => {
  if (isSearching) {
    return (
      <div className="text-center text-gray-400 mt-12">
        <p>Searching...</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-12">
        <p>No results found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {results.map((song) => (
        <SearchCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SearchResults;