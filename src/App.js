import React from 'react';

import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import './App.css';

function App() {
  const FILMS_LIST = gql`
    query getFilms {
      allFilms(
        orderBy:releaseDate_ASC
      ) {
        title
        episodeId
      }
    }
  `;

  const { loading, error, data } = useQuery(FILMS_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allFilms.map(({ episodeId, title }) => (
    <div key={episodeId}>
      <p>
        {episodeId}: {title}
      </p>
    </div>
  ));
}

export default App;
