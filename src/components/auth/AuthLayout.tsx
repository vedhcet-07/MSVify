import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="flex items-center mb-8">
        <img
          src="https://i.ibb.co/K6mKLhs/msvify-1.png"
          alt="Music Icon"
          className="h-10 w-10 text-green-500"
        />
        <span className="text-white text-2xl font-bold ml-2">MSVify</span>
      </div>

      <div className="w-full max-w-md bg-gray-900 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;