import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const HomeHook = () => {
  const filmQuery = gql`
    query getFilms {
      allFilms(
        orderBy:releaseDate_ASC
      ) {
        title
        episodeId
      }
    }
  `;

  const { loading, error, data } = useQuery(filmQuery);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return <DisplayFilms films={data.allFilms} />;
};

const DisplayFilms = (data) => {
  return data.films.map(({ episodeId, title }) => (
    <div key={episodeId}>
      <p>
        {episodeId}: {title}
      </p>
    </div>
  ));
};

export default HomeHook;