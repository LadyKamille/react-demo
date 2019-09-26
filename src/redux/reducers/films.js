import { ADD_FILM, ADD_FAVORITE_FILM, REMOVE_FAVORITE_FILM } from '../actions/actionTypes';

const initialState = {
  allFilms: [],
  favoriteFilms: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FILM: {
      const { content } = action.payload;
      const index = state.allFilms.findIndex(film => film.id === content.id);
      if(index === -1) {
        return {
          ...state,
          allFilms: [...state.allFilms, content],
        };
      }
      return state;
    }
    case ADD_FAVORITE_FILM: {
      const { content } = action.payload;
      return {
        ...state,
        favoriteFilms: [...state.favoriteFilms, content],
      };
    }
    case REMOVE_FAVORITE_FILM: {
      const { id } = action.payload;
      return {
        ...state,
        favoriteFilms: state.favoriteFilms.filter(film => film.id !== id)
      };
    }
    default:
      return state;
  }
}
