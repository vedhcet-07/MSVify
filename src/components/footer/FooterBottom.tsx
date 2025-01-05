import React from 'react';
import { Globe } from 'lucide-react';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="text-sm text-gray-400">
        © {currentYear} MSVify. All rights reserved.
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <Globe className="h-4 w-4" />
        <select className="bg-transparent border-none focus:outline-none cursor-pointer hover:text-white transition">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </div>
  );
};

export default FooterBottom;