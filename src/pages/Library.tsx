import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import LibraryHeader from '../components/library/LibraryHeader';
import LibraryContent from '../components/library/LibraryContent';

const Library = () => {
  return (
    <PageLayout showFooter>
      <LibraryHeader />
      <LibraryContent />
    </PageLayout>
  );
};

export default Library;