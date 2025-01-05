import React from 'react';

const LibraryHeader = () => {
  return (
    <div 
      className="relative h-[300px] bg-cover bg-center"
      style={{ 
        backgroundImage: `url(https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2072&auto=format&fit=crop)`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="h-full flex items-end p-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Your Library</h1>
            <p className="text-gray-300">All your favorite music in one place</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibraryHeader;