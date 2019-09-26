import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, List, Typography } from 'antd';

import Navigation from '../navigation/Navigation';

class Favorites extends Component {
  render() {
    console.log('props', this.props);
    const { Title } = Typography;
    const { favoriteFilms, favoritePeople } = this.props;

    return (
      <div>
        <Navigation/>
        <Title>Favorites</Title>

        <Title level={2}>Films</Title>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={favoriteFilms}
          renderItem={film => (
            <List.Item key={film.id}>
              <Card title={film.title}>
                {'Released on ' + new Date(film.releaseDate).toLocaleDateString('en-US')}
              </Card>
            </List.Item>
          )}
        />

        <Title level={2}>People</Title>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={favoritePeople}
          renderItem={person => (
            <List.Item key={person.id}>
              <Card title={person.name}>
                {person.homeworld ? 'From ' + person.homeworld : ''}
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    allFilms: state.films.allFilms,
    favoriteFilms: state.films.favoriteFilms,
    favoritePeople: state.people.favoritePeople,
  });
};

export default connect(mapStateToProps)(Favorites);