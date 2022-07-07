import React from 'react';

export default function TitleArea(props) {
  const { title, pubDate, subtitle } = props;
  return (
    <sectoin>
      <h1>
        {title} ({pubDate})
      </h1>
      <h2>{subtitle}</h2>
    </sectoin>
  );
}
