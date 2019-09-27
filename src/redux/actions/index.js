import * as actions from './actionTypes';

// Films
export const addFilm = (content) => ({
  type: actions.ADD_FILM,
  payload: { content },
});

export const addFavoriteFilm = (content) => ({
  type: actions.ADD_FAVORITE_FILM,
  payload: { content },
});

export const removeFavoriteFilm = id => ({
  type: actions.REMOVE_FAVORITE_FILM,
  payload: { id },
});

// People
export const addFavoritePerson = (content) => ({
  type: actions.ADD_FAVORITE_PERSON,
  payload: { content },
});

export const removeFavoritePerson = id => ({
  type: actions.REMOVE_FAVORITE_PERSON,
  payload: { id },
});

// Tasks
export const archiveTask = id => ({
  type: actions.ARCHIVE_TASK,
  id,
});

export const pinTask = id => ({
  type: actions.PIN_TASK,
  id,
});