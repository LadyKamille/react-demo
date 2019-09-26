import { ADD_FAVORITE_PERSON, REMOVE_FAVORITE_PERSON } from '../actions/actionTypes';

const initialState = {
  allPeople: [],
  favoritePeople: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE_PERSON: {
      const { content } = action.payload;
      return {
        ...state,
        favoritePeople: [...state.favoritePeople, content],
      };
    }
    case REMOVE_FAVORITE_PERSON: {
      const { id } = action.payload;
      return {
        ...state,
        favoritePeople: state.favoritePeople.filter(film => film.id !== id)
      };
    }
    default:
      return state;
  }
}
