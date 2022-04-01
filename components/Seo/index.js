import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Code Master descriptions',
  author = 'Rising Stars',
  meta,
  title = 'Code Master Title',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `team2:creator`,
      content: author,
    },
    // {
    //   name: `twitter:card`,
    //   content: `summary`,
    // },
    // {
    //   name: `twitter:title`,
    //   content: title,
    // },
    // {
    //   name: `twitter:description`,
    //   content: description,
    // },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
