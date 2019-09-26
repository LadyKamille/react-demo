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
        gender
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
      gender: person.gender || '',
      birthYear: person.birthYear || '',
      homeworld: person.homeworld ? person.homeworld.name : '',
    });

    return allPersons;
  }, []);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        {
          text: 'MALE',
          value: 'MALE',
        },
        {
          text: 'FEMALE',
          value: 'FEMALE',
        },
        {
          text: 'UNKNOWN',
          value: 'UNKNOWN',
        },
        {
          text: 'HERMAPHRODITE',
          value: 'HERMAPHRODITE',
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.gender.indexOf(value),
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: 'Birth Year',
      dataIndex: 'birthYear',
      key: 'birthYear',
      sorter: (a, b) => a.birthYear.localeCompare(b.birthYear, undefined, {
        numeric: true, sensitivity: 'base'
      }),
    },
    {
      title: 'Home World',
      dataIndex: 'homeworld',
      key: 'homeworld',
      sorter: (a, b) => a.homeworld.localeCompare(b.homeworld),
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