import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message, Button, Typography } from 'antd';

import HomeHook from './HomeHook';
import Navigation from '../navigation/Navigation';

import { addFavoriteFilm, removeFavoriteFilm } from '../redux/actions';
import styles from './Home.module.css';

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
            <div className={styles.center}>
              {!this.isItemInStore(film.id) ? <Button
                type="primary"
                shape="circle"
                icon="plus-circle"
                onClick={() => this.handleClick(addFavoriteFilm, 'added', film)}
              /> : null}
              {this.isItemInStore(film.id) ? <Button
                type="danger"
                shape="circle"
                icon="minus-circle"
                onClick={() => this.handleClick(removeFavoriteFilm, 'removed', film.id)}
              /> : null}
            </div>
          );
        },
      },
    ];
  }

  handleClick(action, actionType, payload) {
    this.props.dispatch(action(payload));
    message.success(`Favorite successfully ${actionType}.`);
  }

  isItemInStore(itemId) {
    return (
      this.props.favoriteFilms.length &&
      this.props.favoriteFilms.some(film => film.id === itemId)
    );
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

const mapStateToProps = (state) => {
  return ({
    favoriteFilms: state.films.favoriteFilms,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);