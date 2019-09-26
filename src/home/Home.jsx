import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';

import HomeHook from './HomeHook';
import Navigation from '../navigation/Navigation';

import { addFavoriteFilm, removeFavoriteFilm } from '../redux/actions';

class Home extends Component {
  getColumns() {
    return [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        sorter: (a, b) => a.title.localeCompare(b.title),
      },
      {
        title: 'Episode ID',
        dataIndex: 'episodeId',
        key: 'episodeId',
        sorter: (a, b) => a.episodeId - b.episodeId,
      },
      {
        title: 'Release Date',
        dataIndex: 'releaseDate',
        key: 'releaseDate',
        defaultSortOrder: 'ascend',
        sorter: (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate),
      },
      {
        title: 'Manage Favorites',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (film) => {
          return (
            <div>
              <Button
                type="primary"
                shape="circle"
                icon="plus-circle"
                onClick={() => this.props.dispatch(addFavoriteFilm(film))}
              />
              <Button
                type="primary"
                shape="circle"
                icon="minus-circle"
                onClick={() => this.props.dispatch(removeFavoriteFilm(film.id))}
              />
            </div>
          );
        },
      },
    ];
  }

  render() {
    const { Title } = Typography;

    return (
      <div>
        <Navigation/>
        <Title>Star Wars Films</Title>
        <HomeHook columns={this.getColumns()}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...{ addFavoriteFilm, removeFavoriteFilm },
  dispatch,
});

export default connect(null, mapDispatchToProps)(Home);