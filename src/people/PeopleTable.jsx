import React from 'react';
import { Table, Tag } from 'antd';

import store from '../redux/store';
import { addFilm } from '../redux/actions';

const PeopleTable = (props) => {
  const dataSource = props.people.reduce((allPersons, person) => {
    allPersons.push({
      id: person.id,
      name: person.name,
      gender: person.gender || '',
      birthYear: person.birthYear || '',
      homeworld: person.homeworld ? person.homeworld.name : '',
      films: <FilmTags films={person.films} />,
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

const FilmTags = (props) => {
  const tagColors = [
    'red',
    'orange',
    'green',
    'blue',
    'purple',
    'magenta',
    'gold',
  ];

  const filmTags = props.films.map(film => {
    store.dispatch(addFilm(film));

    return (
      <Tag
        color={tagColors[film.episodeId-1]}
        key={film.id}
      >
        {film.title}
      </Tag>
    );
  });

  return filmTags;
};

export default PeopleTable;