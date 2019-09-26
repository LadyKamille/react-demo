import React from 'react';
import { Table } from 'antd';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const HomeHook = (props) => {
  const filmQuery = gql`
    query getFilms {
      allFilms(
        orderBy:releaseDate_ASC
      ) {
        id
        title
        episodeId
        releaseDate
      }
    }
  `;

  const { loading, error, data } = useQuery(filmQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return <DisplayFilms columns={props.columns} films={data.allFilms} />;
};

const DisplayFilms = (props) => {
  const dataSource = props.films.map(film => {
    film.releaseDate = new Date(film.releaseDate).toLocaleDateString('en-US');
    return film;
  });

  return (
    <Table
      dataSource={dataSource}
      columns={props.columns}
      pagination={false}
      rowKey="episodeId"
    />
  );
};

export default HomeHook;