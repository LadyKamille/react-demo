import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highlighter from 'react-highlight-words';
import {
  message,
  Button,
  Icon,
  Input,
  Layout,
  Typography
} from 'antd';

import PeopleHook from './PeopleHook';
import Navigation from '../navigation/Navigation';

import { addFavoritePerson, removeFavoritePerson } from '../redux/actions';
import styles from './People.module.css';

class People extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  getColumns() {
    return [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        ...this.getColumnSearchProps('name'),
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
        title: 'Films',
        dataIndex: 'films',
        key: 'films',
        filters: this.props.allFilms.map(film => {
          return {
            text: film.title,
            value: film.episodeId,
          };
        }),
        onFilter: (value, record) => {
          const films = record.films.props.films;
          return films.some(film => film.episodeId === value);
        },
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
                onClick={() => this.handleClick(addFavoritePerson, 'added', person)}
              /> : null}
              {this.isItemInStore(person.id) ? <Button
                type="danger"
                shape="circle"
                icon="minus-circle"
                onClick={() => this.handleClick(removeFavoritePerson, 'removed', person.id)}
              /> : null}
            </div>
          );
        },
      },
    ];
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleClick(action, actionType, payload) {
    this.props.dispatch(action(payload));
    message.success(`Favorite successfully ${actionType}.`);
  }

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  isItemInStore(itemId) {
    return (
      this.props.favoritePeople.length &&
      this.props.favoritePeople.some(person => person.id === itemId)
    );
  }

  render() {
    const { Content } = Layout;
    const { Title } = Typography;

    return (
      <div>
        <Navigation/>
        <Content className="content">
          <Title>Star Wars Characters</Title>
          <PeopleHook columns={this.getColumns()}/>
        </Content>
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
    allFilms: state.films.allFilms,
    favoritePeople: state.people.favoritePeople,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
