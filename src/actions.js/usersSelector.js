export function usersSelector(store) {
  return store.users.usersList;
}
export function postsSelector(store) {
  return store.users.postsList;
}
export function albumsSelector(store) {
  return store.users.albumsList;
}
