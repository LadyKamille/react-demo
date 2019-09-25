import React from 'react';
import { Table } from 'antd';

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
        releaseDate
      }
    }
  `;

  const { loading, error, data } = useQuery(filmQuery);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return <DisplayFilms films={data.allFilms} />;
};

const DisplayFilms = (data) => {
  const dataSource = data.films;
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Episode ID',
      dataIndex: 'episodeId',
      key: 'episodeId',
    },
    {
      title: 'Release Date',
      dataIndex: 'releaseDate',
      key: 'releaseDate',
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      rowKey="episodeId"
    />
  );
};

export default HomeHook;