import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ description, title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      titleTemplate={`%s | ${title}`}
    >
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
