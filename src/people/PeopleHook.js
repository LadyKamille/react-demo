import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const PeopleHook = () => {
  const peopleQuery = gql`
    query getPeople {
      allPersons {
        name
        id
      }
    }
  `;

  const { loading, error, data } = useQuery(peopleQuery);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return <DisplayPeople people={data.allPersons} />;
};

const DisplayPeople = (data) => {
  return data.people.map(({ id, name }) => (
    <div key={id}>
      <p>
        {id}: {name}
      </p>
    </div>
  ));
};

export default PeopleHook;