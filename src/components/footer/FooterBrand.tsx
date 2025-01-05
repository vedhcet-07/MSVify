import React from 'react';
import { Music, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const FooterBrand = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Music className="h-8 w-8 text-green-500" />
        <span className="text-white text-xl font-bold ml-2">MSVify</span>
      </div>
      <p className="text-sm text-gray-400">
        Stream millions of songs and podcasts on your device.
      </p>
      <div className="flex space-x-4">
        <a href="https://facebook.com" className="hover:text-green-500 transition">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="https://twitter.com" className="hover:text-green-500 transition">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="https://instagram.com" className="hover:text-green-500 transition">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="https://youtube.com" className="hover:text-green-500 transition">
          <Youtube className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;