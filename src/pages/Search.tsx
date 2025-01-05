import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import SearchResults from '../components/search/SearchResults';
import { useSearch } from '../hooks/useSearch';
import PageLayout from '../components/layout/PageLayout';

const Search = () => {
  const [query, setQuery] = useState('');
  const { results, isSearching } = useSearch(query);

  return (
    <PageLayout showFooter>
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for songs..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          {query ? (
            <SearchResults results={results} isSearching={isSearching} />
          ) : (
            <div className="text-center text-gray-400 mt-12">
              <SearchIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Start typing to search for songs</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Search;