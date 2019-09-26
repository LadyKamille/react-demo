import reducer from './films';
import * as types from '../actions/actionTypes';

describe('films reducer', () => {
  let initialState, addPayload;
  beforeEach(() => {
    initialState = {
      allFilms: [],
      favoriteFilms: [],
    };
    addPayload = {
      content: { id: 1, title: 'foo' },
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('add film reducer', () => {
    it('should handle ADD_FILM for empty state', () => {
      expect(
        reducer(initialState, {
          type: types.ADD_FILM,
          payload: addPayload,
        })
      ).toEqual({
        allFilms: [addPayload.content],
        favoriteFilms: [],
      });
    });

    it('should handle ADD_FILM for non empty state', () => {
      let nonEmptyState = {
        allFilms: [addPayload.content],
        favoriteFilms: [],
      };
      let addPayload2 = { content: { id: 2, title: 'bar' } };

      expect(
        reducer(nonEmptyState, {
          type: types.ADD_FILM,
          payload: addPayload2,
        })
      ).toEqual({
        allFilms: [
          addPayload.content,
          addPayload2.content
        ],
        favoriteFilms: [],
      });
    });

    it('should handle ADD_FILM for dupes', () => {
      const nonEmptyState = {
        allFilms: [addPayload.content],
        favoriteFilms: [],
      };

      expect(
        reducer(nonEmptyState, {
          type: types.ADD_FILM,
          payload: addPayload,
        })
      ).toEqual({
        allFilms: [addPayload.content],
        favoriteFilms: [],
      });
    });
  });

  it('should handle ADD_FAVORITE_FILM', () => {
    expect(
      reducer(initialState, {
        type: types.ADD_FAVORITE_FILM,
        payload: addPayload,
      })
    ).toEqual({
      allFilms: [],
      favoriteFilms: [addPayload.content],
    });
  });

  it('should handle REMOVE_FAVORITE_FILM', () => {
    const nonEmptyState = {
      allFilms: [],
      favoriteFilms: [addPayload.content],
    };

    expect(
      reducer(nonEmptyState, {
        type: types.REMOVE_FAVORITE_FILM,
        payload: { id: 1 },
      })
    ).toEqual({
      allFilms: [],
      favoriteFilms: [],
    });
  });
});