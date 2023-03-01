import { USERS_LIST_LOADED, POSTS_LIST_LOADED, ALBUMS_LIST_LOADED } from './users.actions';

const defaultState = {
  usersList: null,
  postsList: null,
  albumsList: null,
};

export default function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case USERS_LIST_LOADED:
      return { ...state, ...action.payload };
    case POSTS_LIST_LOADED:
      return { ...state, ...action.payload };
    case ALBUMS_LIST_LOADED:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
