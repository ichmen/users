import * as Gateway from '../gateway/gateway';
export const USERS_LIST_LOADED = 'USERS/USERS_LIST_LOADED';
export const POSTS_LIST_LOADED = 'USERS/POSTS_LIST_LOADED';
export const ALBUMS_LIST_LOADED = 'USERS/ALBUMS_LIST_LOADED';

export function usersListLoaded(usersList) {
  return {
    type: USERS_LIST_LOADED,
    payload: {
      usersList,
    },
  };
}
export function postsListLoaded(postsList) {
  return {
    type: POSTS_LIST_LOADED,
    payload: {
      postsList,
    },
  };
}
export function albumsListLoaded(albumsList) {
  return {
    type: ALBUMS_LIST_LOADED,
    payload: {
      albumsList,
    },
  };
}

export function getUsers() {
  function thunkAction(dispatch) {
    try {
      Gateway.fetchUsers().then(data => dispatch(usersListLoaded(data)));
    } catch (e) {
      alert("Can't fetch or bad data");
    }
  }
  return thunkAction;
}
export function getPosts() {
  function thunkAction(dispatch) {
    try {
      Gateway.fetchPosts().then(data => dispatch(postsListLoaded(data)));
    } catch (e) {
      alert("Can't fetch or bad data");
    }
  }
  return thunkAction;
}
export function getAlbums() {
  function thunkAction(dispatch) {
    try {
      Gateway.fetchAlbums().then(data => dispatch(albumsListLoaded(data)));
    } catch (e) {
      alert("Can't fetch or bad data");
    }
  }
  return thunkAction;
}
