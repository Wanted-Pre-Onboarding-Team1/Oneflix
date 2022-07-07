import React from 'react';

export default function ProdCrew({ director, actor }) {
  return (
    <section>
      <ul>
        <li>
          <h3>감독</h3>
          <p>{director}</p>
        </li>
        <li>
          <h3>출연진</h3>
          <p>{actor}</p>
        </li>
      </ul>
    </section>
  );
}
