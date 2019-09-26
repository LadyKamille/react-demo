import React from 'react';
import { Spin } from 'antd';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import PeopleTable from './PeopleTable';
import styles from './People.module.css';

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
        films {
          id
          episodeId
          title
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(peopleQuery);

  if (loading) return <div className={styles.center}><Spin size="large" /></div>;
  if (error) return `Error! ${error}`;

  return (
    <PeopleTable
      columns={props.columns}
      people={data.allPersons}
    />
  );
};

export default PeopleHook;