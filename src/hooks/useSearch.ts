import { useState, useEffect, useMemo } from 'react';
import { Song } from '../types/music';
import { mockSongs } from '../data/mockData';
import { playlistSongs } from '../data/playlistSongs';

export const useSearch = (query: string) => {
  const [isSearching, setIsSearching] = useState(false);

  // Combine all songs from mockSongs and playlistSongs, ensuring uniqueness based on song properties
  const allSongs = useMemo(() => {
    // Use a Map to ensure unique songs based on properties
    const songMap = new Map<string, Song>();

    // Add songs from mockSongs
    mockSongs.forEach((song) => {
      const key = `${song.title}-${song.artist}-${song.album}`; // Create a unique key based on song properties
      songMap.set(key, song);
    });

    // Add songs from all playlists
    Object.values(playlistSongs).forEach((songs) => {
      songs.forEach((song) => {
        const key = `${song.title}-${song.artist}-${song.album}`;
        songMap.set(key, song);
      });
    });

    // Return an array of unique songs
    return Array.from(songMap.values());
  }, []);

  // Filter songs based on search query
  const results = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();
    return allSongs.filter(
      (song) =>
        song.title.toLowerCase().includes(searchTerm) ||
        song.artist.toLowerCase().includes(searchTerm) ||
        song.album.toLowerCase().includes(searchTerm)
    );
  }, [query, allSongs]);

  // Simulate search delay
  useEffect(() => {
    if (query.trim()) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 500);
      return () => clearTimeout(timer);
    }
  }, [query]);

  return { results, isSearching };
};
