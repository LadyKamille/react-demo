import {
  ADD_FILM,
  ADD_FAVORITE_FILM,
  ADD_FAVORITE_PERSON,
  REMOVE_FAVORITE_FILM,
  REMOVE_FAVORITE_PERSON,
} from './actionTypes';

export const addFilm = (content) => ({
  type: ADD_FILM,
  payload: { content },
});

export const addFavoriteFilm = (content) => ({
  type: ADD_FAVORITE_FILM,
  payload: { content },
});

export const addFavoritePerson = (content) => ({
  type: ADD_FAVORITE_PERSON,
  payload: { content },
});

export const removeFavoriteFilm = id => ({
  type: REMOVE_FAVORITE_FILM,
  payload: { id },
});

export const removeFavoritePerson = id => ({
  type: REMOVE_FAVORITE_PERSON,
  payload: { id },
});