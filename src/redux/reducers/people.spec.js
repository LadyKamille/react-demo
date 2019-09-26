import reducer from './people';
import * as types from '../actions/actionTypes';

describe('people reducer', () => {
  let initialState, addPayload;
  beforeEach(() => {
    initialState = {
      allPeople: [],
      favoritePeople: [],
    };
    addPayload = {
      content: { id: 1, name: 'foo' },
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_FAVORITE_PERSON', () => {
    expect(
      reducer(initialState, {
        type: types.ADD_FAVORITE_PERSON,
        payload: addPayload,
      })
    ).toEqual({
      allPeople: [],
      favoritePeople: [addPayload.content],
    });
  });

  it('should handle REMOVE_FAVORITE_PERSON', () => {
    const nonEmptyState = {
      allPeople: [],
      favoritePeople: [addPayload.content],
    };

    expect(
      reducer(nonEmptyState, {
        type: types.REMOVE_FAVORITE_PERSON,
        payload: { id: 1 },
      })
    ).toEqual({
      allPeople: [],
      favoritePeople: [],
    });
  });
});