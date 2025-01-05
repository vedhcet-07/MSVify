import React from 'react';

interface TabsProps {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ value, onChange, children }) => {
  return <div className="border-b border-gray-800">{children}</div>;
};

export const TabsList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex space-x-4">{children}</div>;
};

interface TabsTriggerProps {
  value: string;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors ${className}`}
    >
      {children}
    </button>
  );
};