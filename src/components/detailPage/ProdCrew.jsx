import React from 'react';
import styled from 'styled-components';

export default function ProdCrew({ director, actor }) {
  return (
    <section>
      <ul>
        <CrewInfoBox>
          <InfoTitle>감독</InfoTitle>
          <InfoCont>{director}</InfoCont>
        </CrewInfoBox>
        <CrewInfoBox>
          <InfoTitle>출연진</InfoTitle>
          <InfoCont>{actor}</InfoCont>
        </CrewInfoBox>
      </ul>
      <MovieSummary>
        미션 #1 나, 버즈 라이트이어. 인류 구원에 필요한 자원을 감지하고 현재
        수많은 과학자들과 미지의 행성으로 향하고 있다. 이번 미션은 인류의 역사를
        새롭게 쓸 것이라 확신한다. 미션 #2 잘못된 신호였다. 이곳은 삭막하고
        거대한 외계 생물만이 살고 있는 폐허의 땅이다. 나의 실수로 모두가 이곳에
        고립되고 말았다. 모두를 구하기 위해서 모든 것을 제자리에 돌려 놔야 한다.
        미션 #3 실수를 바로잡기 위한 탈출 미션을 위해 1년의 준비를 마쳤다.
        어쩌다 한 팀이 된 정예 부대와 이 미션을 수행할 예정이다. 우주를 집어삼킬
        ‘저그’와 대규모 로봇 군사의 위협이 계속되지만 나는 절대 포기할 수 없다.
        그런데… 여긴 또 어디지? 시간 속에 갇힌 건가?
      </MovieSummary>
    </section>
  );
}

const CrewInfoBox = styled.li`
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
const MovieSummary = styled.p`
  width: 30vw;
  overflow: visible;
  font-size: 1rem;
  line-height: 1.3rem;
  margin-top: 1rem;
`;
