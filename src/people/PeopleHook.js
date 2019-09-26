import React from 'react';
import { Table } from 'antd';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const PeopleHook = (props) => {
  const peopleQuery = gql`
    query getPeople {
      allPersons {
        name
        id
        birthYear
        gender
        homeworld {
          id
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(peopleQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return <DisplayPeople columns={props.columns} people={data.allPersons} />;
};

const DisplayPeople = (props) => {
  const dataSource = props.people.reduce((allPersons, person) => {
    allPersons.push({
      id: person.id,
      name: person.name,
      gender: person.gender || '',
      birthYear: person.birthYear || '',
      homeworld: person.homeworld ? person.homeworld.name : '',
    });

    return allPersons;
  }, []);

  return (
    <Table
      dataSource={dataSource}
      columns={props.columns}
      rowKey="id"
    />
  );
};

export default PeopleHook;