import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';

import PeopleHook from './PeopleHook';
import Navigation from '../navigation/Navigation';

import { addFavoritePerson, removeFavoritePerson } from '../redux/actions';
import styles from './People.module.css';

class People extends Component {
  getColumns() {
    return [
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
        onFilter: (value, record) => record.gender.indexOf(value) === 0,
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
      {
        title: 'Manage Favorites',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (person) => {
          return (
            <div className={styles.center}>
              {!this.isItemInStore(person.id) ? <Button
                type="primary"
                shape="circle"
                icon="plus-circle"
                onClick={() => this.props.dispatch(addFavoritePerson(person))}
              /> : null}
              {this.isItemInStore(person.id) ? <Button
                type="danger"
                shape="circle"
                icon="minus-circle"
                onClick={() => this.props.dispatch(removeFavoritePerson(person.id))}
              /> : null}
            </div>
          );
        },
      },
    ];
  }

  isItemInStore(itemId) {
    return (
      this.props.favoritePeople.length &&
      this.props.favoritePeople.some(person => person.id === itemId)
    );
  }

  render() {
    const { Title } = Typography;

    return (
      <div>
        <Navigation/>
        <Title>Star Wars Characters</Title>
        <PeopleHook columns={this.getColumns()}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...{ addFavoritePerson, removeFavoritePerson },
  dispatch,
});

const mapStateToProps = (state) => {
  return ({
    favoritePeople: state.people.favoritePeople,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
