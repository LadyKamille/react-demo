import * as actions from './';
import * as types from './actionTypes';

describe('actions', () => {
  it('should create an action to add a film', () => {
    const content = {id: 1, title: 'foo'};
    const expectedAction = {
      type: types.ADD_FILM,
      payload: { content },
    };
    expect(actions.addFilm(content)).toEqual(expectedAction);
  });

  it('should create an action to add a favorite film', () => {
    const content = {id: 1, title: 'foo'};
    const expectedAction = {
      type: types.ADD_FAVORITE_FILM,
      payload: { content },
    };
    expect(actions.addFavoriteFilm(content)).toEqual(expectedAction);
  });

  it('should create an action to add a favorite person', () => {
    const content = {id: 2, name: 'bar'};
    const expectedAction = {
      type: types.ADD_FAVORITE_PERSON,
      payload: { content },
    };
    expect(actions.addFavoritePerson(content)).toEqual(expectedAction);
  });

  it('should create an action to remove a favorite film', () => {
    const id = 1;
    const expectedAction = {
      type: types.REMOVE_FAVORITE_FILM,
      payload: { id },
    };
    expect(actions.removeFavoriteFilm(id)).toEqual(expectedAction);
  });

  it('should create an action to remove a favorite person', () => {
    const id = 1;
    const expectedAction = {
      type: types.REMOVE_FAVORITE_PERSON,
      payload: { id },
    };
    expect(actions.removeFavoritePerson(id)).toEqual(expectedAction);
  });
});