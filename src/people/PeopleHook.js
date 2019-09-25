import React from 'react';
import { Table } from 'antd';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const PeopleHook = () => {
  const peopleQuery = gql`
    query getPeople {
      allPersons {
        name
        id
        birthYear
        homeworld {
          id
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(peopleQuery);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return <DisplayPeople people={data.allPersons} />;
};

const DisplayPeople = (data) => {
  const dataSource = data.people.reduce((allPersons, person) => {
    allPersons.push({
      id: person.id,
      name: person.name,
      birthYear: person.birthYear,
      homeworld: person.homeworld && person.homeworld.name,
    });

    return allPersons;
  }, []);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Birth Year',
      dataIndex: 'birthYear',
      key: 'birthYear',
    },
    {
      title: 'Home World',
      dataIndex: 'homeworld',
      key: 'homeworld',
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="id"
    />
  );
};

export default PeopleHook;