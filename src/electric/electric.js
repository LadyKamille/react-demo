import React from 'react';
import Table from 'antd/es/table';

import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

function Electric() {
  const POKEMON_LIST = gql`
    query getPokemon {
      pokemons(first: 10) {
        id
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(POKEMON_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.pokemons.map(({ id, name }) => (
    <div key={id}>
      <p>
        {id}: {name}
      </p>
    </div>
  ));
}

export default Electric;
