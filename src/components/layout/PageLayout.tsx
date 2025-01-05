import React from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import Footer from '../footer/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const PageLayout = ({ children, showFooter = false }: PageLayoutProps) => {
  useScrollToTop();

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 to-black">
      {children}
      {showFooter && <Footer className="mt-0" />}
    </div>
  );
};

export default PageLayout;