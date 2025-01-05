import React from 'react';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';
import FooterBottom from './FooterBottom';

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/press', label: 'Press' },
];

const communityLinks = [
  { to: '/artists', label: 'For Artists' },
  { to: '/developers', label: 'Developers' },
  { to: '/advertising', label: 'Advertising' },
];

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  return (
    <footer className={`bg-[#121212] text-gray-300 py-12 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          <FooterBrand />
          <FooterLinks title="Company" links={companyLinks} />
          <FooterLinks title="Communities" links={communityLinks} />
          <FooterNewsletter />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8 pb-8 border-b border-gray-800">
          <div className="flex justify-center">
            <FooterBrand />
          </div>
          <div className="space-y-6 text-center">
            <FooterLinks title="Company" links={companyLinks} />
            <FooterLinks title="Communities" links={communityLinks} />
            <div className="px-4">
              <FooterNewsletter />
            </div>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;