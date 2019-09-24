import React from 'react';
import Table from 'antd/es/table';

import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

function People() {
  const PEOPLE_LIST = gql`
    query getPeople {
      allPersons {
        name
        id
      }
    }
  `;

  const { loading, error, data } = useQuery(PEOPLE_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allPersons.map(({ id, name }) => (
    <div key={id}>
      <p>
        {id}: {name}
      </p>
    </div>
  ));
}

export default People;
