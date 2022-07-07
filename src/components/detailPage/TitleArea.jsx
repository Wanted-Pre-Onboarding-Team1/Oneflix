import React from 'react';
import styled from 'styled-components';

export default function TitleArea(props) {
  const { title, pubDate, subtitle } = props;
  return (
    <Section>
      <Title>
        {title} ({pubDate})
      </Title>
      <Genres>{subtitle}</Genres>
      <Runtime>2h 11m</Runtime>
    </Section>
  );
}

const Section = styled.section`
  font-size: 1.2rem;
`;

const Title = styled.h1`
  font-size: 2.6rem;
`;

const Genres = styled.p`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 1rem;

  ::after {
    content: '·';
    color: #ffffff;
    margin-left: 1rem;
  }
`;

const Runtime = styled.p`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 1rem;
`;
