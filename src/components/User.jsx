import React from 'react';
import { connect } from 'react-redux';
import { postsSelector } from '../actions.js/usersSelector';
import { getAlbums, getPosts } from '../actions.js/users.actions';
function User({ user, postsClickHandler, albumsClickHandler }) {
  return (
    <tr>
      <th>{user.name}</th>
      <th>{user.username}</th>
      <th>{user.email}</th>
      <th>
        <button onClick={() => postsClickHandler(user.id)}>posts</button>
      </th>
      <th>
        <button onClick={() => albumsClickHandler(user.id)}>albums</button>
      </th>
    </tr>
  );
}

const mapState = state => ({
  posts: postsSelector(state),
});
const mapDispatch = { getPosts, getAlbums };

export default connect(mapState, mapDispatch)(User);
