import React from 'react';

const WelcomeHeader = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <header className="mb-8">
      <h1 className="text-2xl font-bold text-white mx-auto w-fit">
        {getGreeting()}
      </h1>
    </header>
  );
};

export default WelcomeHeader;
