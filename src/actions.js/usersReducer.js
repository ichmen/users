import { USERS_LIST_LOADED, POSTS_LIST_LOADED, ALBUMS_LIST_LOADED } from './users.actions';

const defaultState = {
  users: null,
  posts: null,
  albums: null,
};

export default function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case USERS_LIST_LOADED:
      return { ...state, users: action.payload };
    case POSTS_LIST_LOADED:
      return { ...state, posts: action.payload };
    case ALBUMS_LIST_LOADED:
      return { ...state, albums: action.payload };

    default:
      return state;
  }
}
