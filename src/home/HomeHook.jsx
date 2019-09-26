import React from 'react';
import { Spin, Table } from 'antd';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import store from '../redux/store';
import { addFilm } from '../redux/actions';
import styles from './Home.module.css';

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

  if (loading) return <div className={styles.center}><Spin size="large" /></div>;
  if (error) return `Error! ${error}`;

  return <DisplayFilms columns={props.columns} films={data.allFilms} />;
};

const DisplayFilms = (props) => {
  const dataSource = props.films.map(film => {
    store.dispatch(addFilm(film));
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