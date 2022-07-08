import React from 'react';
import styled from 'styled-components';

export default function ProdCrew({ director, actor, summary }) {
  return (
    <section>
      <ul>
        {/* <List>
          <InfoTitle>감독</InfoTitle>
          <InfoCont>{director}</InfoCont>
        </List>
        <List>
          <InfoTitle>출연진</InfoTitle>
          <InfoCont>{actor}</InfoCont>
        </List> */}
      </ul>
      <Summary>{summary}</Summary>
    </section>
  );
}

const List = styled.li`
  display: flex;
  margin-top: 1rem;
`;

const InfoTitle = styled.h3`
  font-size: 2rem;
  margin-right: 0.8rem;
`;

const InfoCont = styled.p`
  font-size: 1.4rem;
`;

const Summary = styled.p`
  width: 30vw;
  overflow: visible;
  font-size: 1rem;
  line-height: 1.3rem;
  margin-top: 1rem;
`;
