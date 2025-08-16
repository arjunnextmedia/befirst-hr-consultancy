import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
  // Add error boundary protection
  if (typeof document === 'undefined') {
    return null; // Server-side rendering protection
  }

  return (
    <Helmet>
      <title>{title || 'Befirst HR & Management Consultancy'}</title>
      <meta name="description" content={description || 'Professional HR consultancy services in Kerala'} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
    </Helmet>
  );
};

export default SEO;