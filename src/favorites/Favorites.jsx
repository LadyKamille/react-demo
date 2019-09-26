import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';

import Navigation from '../navigation/Navigation';

class Favorites extends Component {
  render() {
    const { Title } = Typography;
    const { favoriteFilms, favoritePeople } = this.props;
    console.log('this', this);

    return (
      <div>
        <Navigation/>
        <Title>Favorites</Title>

        <Title level={2}>Films</Title>
        <ul>
          {favoriteFilms && favoriteFilms.length
            ? favoriteFilms.map(film => {
              return <li key={film.id}>{film.title}</li>;
            })
            : 'No favorite films.'
          }
        </ul>

        <Title level={2}>People</Title>
        <ul>
          {favoritePeople && favoritePeople.length
            ? favoritePeople.map(person => {
              return <li key={person.id}>{person.name}</li>;
            })
            : 'No favorite people.'
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    favoriteFilms: state.films.favoriteFilms,
    favoritePeople: state.people.favoritePeople,
  });
};

export default connect(mapStateToProps)(Favorites);